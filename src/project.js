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

    const removeTodo = (id) => {
        const index = todoList.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todoList.splice(index, 1);
        }
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