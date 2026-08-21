//Imports
import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";
import ProjectManager from "./projectManager.js";
import { format, toDate } from "date-fns";
import { setLocalStorage, loadLocalStorage } from "./utils/localStorage.js";
import { drawProjects, drawProjectMenu, drawTodoList, addTodoListItem } from "./domhandler.js";

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

//Event Listeners
newProject.addEventListener('click', () =>{
    let userInput = prompt('Please name your new project'); 
    if (userInput === "") {
        return alert ('you MUST name your Project');
    } else {
        ProjectManager.createProject(userInput);
        drawProjects(ProjectManager.getProject())
    }
});

projectColumn.addEventListener('click', (event) => {
    const projectItem = event.target.closest('.project-item')
    if (!projectItem) return;

    const projectID = projectItem.dataset.projectID;
    const projectName = ProjectManager.getProject(Number(projectID)).name;

    drawProjectMenu(projectTodoColumn, projectName, projectID);
    drawTodoList(projectID);
});

projectTodoColumn.addEventListener('click', (event) => {
  const addTodo = event.target.closest('#addTodo');
  if (!addTodo) return;
    if (getComputedStyle(addTodoForm).display === 'none') {
      console.log('clicked');
      // addTodoForm.style.display = 'block';
      addTodoForm.style.display = 'block';;
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
    drawTodoList(projectId);
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