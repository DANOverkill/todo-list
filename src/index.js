//Imports
import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";
import ProjectManager from "./projectManager.js";
import { format } from "date-fns";
import { setLocalStorage, loadLocalStorage } from "./utils/localStorage.js";

console.log("Webpack template running!");

//exposure for testing
window.Project = Project;
window.Todo = Todo;
window.ProjectManager = ProjectManager;
window.format = format;
window.setLocalStorage = setLocalStorage;
window.loadLocalStorage = loadLocalStorage;


// =========== PAGE LOAD LOGIC =============//

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