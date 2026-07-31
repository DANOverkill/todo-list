//Imports
import "./style.css";
import Project from "./project.js";

console.log("Webpack template running!");


const createProject = (input) => {
    
    const newProjectName = Project(input);
    return newProjectName;
    
};


//exposure for testing
window.createProject = createProject;
window.Project = Project;