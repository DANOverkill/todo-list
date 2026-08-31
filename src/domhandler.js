//Imports
import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";
import ProjectManager from "./projectManager.js";
import { format } from "date-fns";
import { setLocalStorage, loadLocalStorage } from "./utils/localStorage.js";

//DOM
const projectContent = document.querySelector('#project_content')
const editTodoForm_container = document.querySelector('#editTodoForm-container');

//Draw functions
const drawProjects = (projects) => {
    projectContent.innerHTML = '';

    projects.forEach(element => {
        const projectDiv = document.createElement('div');

        projectDiv.className = 'project-item';
        projectDiv.dataset.projectID = element.id;
        projectDiv.textContent = element.name;

        projectContent.appendChild(projectDiv);
    });
};

const drawProjectMenu = (location, projectName, projectID) => {
    const projectMenu = document.createElement('div');
    location.innerHTML = '';
    projectMenu.className = 'project-menu';
    projectMenu.innerHTML = `
        <div class="projectHeader-container">
            <div class ="project-name">${projectName}</div>
            <div class="project-buttons">
                <nav id="${Number(projectID)}">
                <button type="button" id="addTodo">Add New Todo</button>
                <button type="button" id="editProject">Edit</button>
                <button type="button" id="deleteProject">Delete</button>
                </nav>
            </div>
        </div>
        <div class="todoList-container"></div>`;
    
    location.appendChild(projectMenu);
    const addTodo = document.querySelector('#addTodo');
    
    return addTodo;
};

const addTodoListItem = (navID, todoName, todoDate, todoInfo, id) => {
    const projectID = Number(navID);
    ProjectManager.getProject(projectID).addTodo(todoName, todoDate, todoInfo, id);
};

const drawTodoList = (navID) => {
    const projectID = Number(navID);
    const todoLists = ProjectManager.getProject(projectID).getTodoList();
    const projectTodoContainer = document.querySelector('.todoList-container');
    projectTodoContainer.innerHTML = '';

    todoLists.forEach(element => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item'
        todoItem.id = element.id;
        todoItem.innerHTML = `
            <div class = "todoItem-name">${element.name}</div>
            <div class = "todoItem-dueDate">${element.dueDate}</div>
            <div class = "todoItem-info">${element.info}</div>
            <form>
                <label for="completed">Task Completed</label>
                <input type="checkbox" id="completed" name="completed" value="Completed" ${element.completed ? 'checked' : ''}>
            </form><br>
            <button type="button" id="editTodo">Edit Todo</button>
            <button type="button" id="deleteTodo">Delete Todo</button>
        `; 

        projectTodoContainer.appendChild(todoItem)
    });

};

const drawEditTodoForm = (todoID, projectID) => {
    const todoForm = document.createElement('div');
    const project = ProjectManager.getProject(projectID);
    const todo = project.getTodo(Number(todoID));

    todoForm.innerHTML = `
        <form class="editTodo-form" id="${todoID}">
            <label for=todoName">Todo name:</label><br>
            <input type="text" id="todoName" name="todoName" value="${todo.name}"><br>
            <label for="dueDate">Due Date:</label><br>
            <input type="date" id="dueDate" value="${todo.dueDate}"><br>
            <label for="todoInfo">Info:</label><br>
            <input type="text" id="todoInfo" name="todoInfo" value="${todo.info}"><br><br>
            <input type="submit" value="Submit" id="submitTodoInfo">
        </form>
    `
    return editTodoForm_container.appendChild(todoForm);
};

const drawEditProjectForm = (projectID) => {
    const editProjectForm = document.createElement('div');
    const project = ProjectManager.getProject(Number(projectID));

    editProjectForm.innerHTML = `
        <form class="editProject-form" id="${project.id}">
            <label for=projectName">Project name:</label><br>
            <input type="text" id="projectName" name="projectName" value="${project.name}"><br>
            <input type="submit" value="Submit" id="submitProjectInfo">
        </form>
    `
    return projectContent.appendChild(editProjectForm);
}

//EXPORTS

export {drawProjects, drawProjectMenu, drawTodoList, addTodoListItem, drawEditTodoForm, drawEditProjectForm};