//Imports
import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";
import ProjectManager from "./projectManager.js";
import { format } from "date-fns";
import { setLocalStorage, loadLocalStorage } from "./utils/localStorage.js";

//DOM
const projectContent = document.querySelector('#project_content')

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
        <nav id="${Number(projectID)}">
            <button id="addTodo">Add New Todo</button>
            <button id="editTodo">Edit Todo</button>
            <button id="deleteTodo">Delete Todo</button>
        </nav>
        <div class="todoList-container">all the todos from ${projectName} go here </div>`;
    
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
        todoItem.dataset.todoItemID = element.id;
        todoItem.innerHTML = `
            <div class = "todoItem-name">${element.name} - </div>
            <div class = "todoItem-dueDate">${element.dueDate}</div><br>
            <div class = "todoItem-info">${element.info} - </div>
            <form>
                <label for="completed">Task Completed</label>
                <input type="checkbox" id="completed" name="completed" value="Completed" ${element.completed ? 'checked' : ''}>
            <form>
        `; 

        projectTodoContainer.appendChild(todoItem)
    });

};

//EXPORTS

export {drawProjects, drawProjectMenu, drawTodoList, addTodoListItem};