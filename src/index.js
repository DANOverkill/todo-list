//Imports
import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";
import ProjectManager from "./projectManager.js";
import { format, set, toDate } from "date-fns";
import { setLocalStorage, loadLocalStorage } from "./utils/localStorage.js";
import { 
        drawProjects, 
        drawProjectMenu, 
        drawTodoList, 
        addTodoListItem, 
        drawEditTodoForm,
        drawEditProjectForm,
        drawNewProjectForm
        } from "./domhandler.js";
import editUpdates from "./utils/editUpdates.js";

console.log("Webpack template running!");

//exposure for testing
window.Project = Project;
window.Todo = Todo;
window.ProjectManager = ProjectManager;
window.format = format;
window.setLocalStorage = setLocalStorage;
window.loadLocalStorage = loadLocalStorage;


// =========== PAGE LOAD LOGIC =============//
//DOM CACHE
const projectColumn = document.querySelector('#projects_column');
const projectTodoColumn = document.querySelector('#projectTodo-column');
const newProject = document.querySelector('#newProject');
const addTodoForm = document.querySelector('#addTodo-form');
const editTodoForm_container = document.querySelector('#editTodoForm-container');
const projectContent = document.querySelector('#project_content');
const editProjectForm_container = document.querySelector('#editProjectForm-container');

//--------- Local Memory check -------------//
const loadPage = () => {
    let storageLength = localStorage.length;
    if (storageLength === 0) {
        return;
    }
    for (let i = 0; i < storageLength; i++) {
        let storageID = localStorage.key(i);
        loadLocalStorage(storageID);
    };
    drawProjects(ProjectManager.getProject());
};

loadPage();

// =========== Event Listeners =============//

// --------- Projects Listeners -------------//
//create new project
newProject.addEventListener('click', () => {
    drawNewProjectForm();
});

// Delete Project
projectTodoColumn.addEventListener('click', (event) => {
    const deleteProject = event.target.closest('#deleteProject');
    if (!deleteProject) return;
    const nav = deleteProject.closest('nav');
    const projectID = Number(nav.id); 
    ProjectManager.removeProject(projectID);
    localStorage.removeItem(projectID);
    projectTodoColumn.innerHTML = '';
    drawProjects(ProjectManager.getProject());
});

// Edit Projects
projectTodoColumn.addEventListener('click', (event) => {
    const editProject = event.target.closest('#editProject');
    if (!editProject) return;
    console.log("i got clicked");
    const projectID = Number(document.querySelector('.project-menu nav').id);
    drawEditProjectForm(projectID);
});
// submid new project or edit project form
editProjectForm_container.addEventListener('submit', (event) => {
    
    event.preventDefault(); 
    
    const form = event.target;
    const newProjectName = document.getElementById('projectName').value;
    
    if (newProjectName === '') {
        return alert('You MUST name your project');
    }
    if (form.id === 'newProjectForm') {
        const newProject = ProjectManager.createProject(newProjectName);
        setLocalStorage(newProject.id)
        drawProjects(ProjectManager.getProject());
    } else {
        const projectID = Number(form.id);
        const originalProject = ProjectManager.getProject(Number(projectID));
        const newProject = { name:newProjectName };
        const updates = editUpdates(originalProject, newProject);
        ProjectManager.editProject(projectID, updates);
        setLocalStorage(projectID);
        drawProjectMenu(projectTodoColumn, originalProject.name, projectID);
        drawTodoList(projectID);
        drawProjects(ProjectManager.getProject());
    }

    document.querySelector('#editProjectForm-container').innerHTML = '';
});

//switch which project todos are being displayed
projectColumn.addEventListener('click', (event) => {
    const projectItem = event.target.closest('.project-item')
    if (!projectItem) return;

    const projectID = projectItem.dataset.projectID;
    const projectName = ProjectManager.getProject(Number(projectID)).name;

    drawProjectMenu(projectTodoColumn, projectName, projectID);
    drawTodoList(projectID);
});

//---------- Todo Item Event Listeners -----------//
// Add Todo Button Logic
projectTodoColumn.addEventListener('click', (event) => {
  const addTodo = event.target.closest('#addTodo');
  if (!addTodo) return;
    if (getComputedStyle(addTodoForm).display === 'none') {
      console.log('clicked');
      addTodoForm.style.display = 'block';
    };
});

addTodoForm.addEventListener('submit', (event) => {
    
    const navElement = projectTodoColumn.querySelector('.project-menu nav');
    const projectId = Number(navElement.id);

    event.preventDefault(); 
    if (getComputedStyle(addTodoForm).display === 'block') {
    addTodoForm.style.display = 'none';
    }
    const todoName = document.getElementById('todoName').value;
    const dueDate = document.getElementById('dueDate').value;
    const todoInfo = document.getElementById('todoInfo').value;
    addTodoListItem(projectId, todoName, dueDate, todoInfo)
    setLocalStorage(projectId);
    drawTodoList(projectId);
});

//Edit Todo Item
projectTodoColumn.addEventListener('click', (event) => {
    const editButton = event.target.closest('#editTodo');
    if (!editButton) return;
    const projectID = Number(document.querySelector('.project-menu nav').id);
    const todoItem = editButton.closest('.todo-item');
    drawEditTodoForm(todoItem.id, projectID);
});

editTodoForm_container.addEventListener('submit', (event) => {
    
    event.preventDefault(); 
    
    const form = event.target;
    const todoID = form.id;

    const projectID = document.querySelector('.project-menu nav').id;
    
    const todoName = document.getElementById('todoName').value;
    const dueDate = document.getElementById('dueDate').value;
    const todoInfo = document.getElementById('todoInfo').value;

    const newTodo = {
        name:todoName, 
        info:todoInfo, 
        dueDate:dueDate
    };
    const originalTodo = ProjectManager.getProject(Number(projectID)).getTodo(Number(todoID));
    const updates = editUpdates(originalTodo, newTodo);

    ProjectManager.getProject(Number(projectID)).editTodo(Number(todoID), updates);
    setLocalStorage(Number(projectID));

    drawTodoList(Number(projectID));

    editTodoForm_container.innerHTML = '';
});

// Delete Todo
projectTodoColumn.addEventListener('click', (event) => {
    const deleteTodo = event.target.closest('#deleteTodo');
    if (!deleteTodo) return;
    const projectID = Number(document.querySelector('.project-menu nav').id);
    const todoItem = deleteTodo.closest('.todo-item');
    ProjectManager.getProject(projectID).removeTodo(Number(todoItem.id));
    setLocalStorage(Number(projectID));
    drawTodoList(Number(projectID));
});

// Check Completed Catch
projectTodoColumn.addEventListener("change", (event) => {
    const completedCheck = event.target.closest('#completed');
    if (!completedCheck) return;

    const projectID = Number(document.querySelector('.project-menu nav').id);
    const todoID = Number((completedCheck.closest('.todo-item').id));
    const completedStatus = ProjectManager.getProject(projectID).getTodo(todoID).completed;

    if (completedStatus === false) {
        ProjectManager.getProject(projectID).editTodo(todoID, {completed:true});
        setLocalStorage(Number(projectID));
        completedCheck.checked = true;
    } else {
        ProjectManager.getProject(projectID).editTodo(todoID, {completed:false});
        setLocalStorage(Number(projectID));
        completedCheck.checked = false;
    }
});

// ***** IMPORTANT *******
// This wont work because when pushing the loadLocalStorage into
// ProjectsManager's projects array, we loose all our methods. 
// ==========================

// (might need to run this in a module later)

// check for storage first
// const memoryCheck = () => {
//     const savedData = loadLocalStorage();
    
//     if (savedData.findIndex(index => index.id) !== -1){
//         const projectManager = ProjectManager();
//         const savedData = loadLocalStorage();
//         projectManager.getProject().push(...savedData);

//         return projectManager;
//     } else {
//         return ProjectManager();
//     }
// };
// window.memoryCheck = memoryCheck; 

// const projectManager = memoryCheck();
// window.projectManager = projectManager;