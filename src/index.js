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