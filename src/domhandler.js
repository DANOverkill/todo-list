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


//EXPORTS

export {drawProjects};