//Imports
import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";
import ProjectManager from "./projectManager.js";

console.log("Webpack template running!");


// exposing ProjectManager() for testing
// const manager = ProjectManager();

const createTodo = (name, projectName, dueDate) => {
    projectName.getTodoList().push(Todo(name, dueDate));
};

//exposure for testing
window.Project = Project;
window.Todo = Todo;
window.createTodo = createTodo;
window.ProjectManager = ProjectManager;