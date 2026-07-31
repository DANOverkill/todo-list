//Imports
import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";

console.log("Webpack template running!");


const createProject = (input) => {
    const newProjectName = Project(input);
    return newProjectName;
};

const createTodo = (name, projectName, dueDate) => {
    projectName.getTodoList().push(Todo(name, dueDate));
};

//exposure for testing
window.createProject = createProject;
window.Project = Project;
window.Todo = Todo;
window.createTodo = createTodo;