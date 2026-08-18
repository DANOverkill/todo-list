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
const drawProjectMenu = (location, projectName) => {
    const projectMenu = document.createElement('div');
    location.innerHTML = '';
    projectMenu.className = 'project-menu';
    projectMenu.innerHTML = `
        <nav id="project_menue">
            <button id="newTodo">Add New Todo</button>
            <button id="editTodo">Edit Todo</button>
            <button id="deleteTodo">Delete Todo</button>
        </nav>
        <p>all the todos from ${projectName} go here `;
    
    location.appendChild(projectMenu);
};

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

//EXPORTS

export {drawProjects, drawProjectMenu};