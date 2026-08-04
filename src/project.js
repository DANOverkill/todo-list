import createID from "./utils/createID.js";
import Todo from "./todo.js";

const Project = (name) => {

    //declarations
    const todoList = [];
    const id = createID();

    //Todo methods
    const addTodo = (name, dueDate) => {
        todoList.push(Todo(name, dueDate));
    }; 
    
    //getters
    const getTodoList = () => todoList;

    return {
        name, 
        id, 
        getTodoList,
        addTodo
    };
};

export default Project; 


// delete bellow
const createTodo = (name, projectName, dueDate) => {
    projectName.getTodoList().push(Todo(name, dueDate));
};