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

    const removeTodo = (name) => {

        todoList.forEach(name => {
            let todoIndex = todoList.indexOf();
            let todoName = todoList(todoIndex).name;
            if (todoList.name == name) {
                todoList.splice.todoIndex;
            }
            else if (todoList.indexOf === -1) {
                return;
            }
        });
    };
    
    //getters
    const getTodoList = () => todoList;

    return {
        name, 
        id, 
        getTodoList,
        addTodo,
        removeTodo
    };
};

export default Project; 


// delete bellow
const createTodo = (name, projectName, dueDate) => {
    projectName.getTodoList().push(Todo(name, dueDate));
};