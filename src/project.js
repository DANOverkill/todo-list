import createID from "./utils/createID.js";
import Todo from "./todo.js";

const Project = (name, ExistingID) => {

    //declarations
    const todoList = [];
    const id = createID(ExistingID);

    //Todo methods
    const addTodo = (name, dueDate, info) => {
        if (info === undefined) {
            let noInfo = '';
            todoList.push(Todo(name, dueDate, noInfo));
        } else {
           todoList.push(Todo(name, dueDate, info));
        };
    }; 

    const removeTodo = (id) => {
        const index = todoList.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todoList.splice(index, 1);
        }
    };

    const editTodo = (id, updates) => {
        const todo = todoList.find(todo => todo.id === id);
        if (todo) {
            Object.assign(todo, updates);
        }
    };

    //Getters
    const getTodoList = () => todoList;

    return {
        name, 
        id,
        getTodoList,
        addTodo,
        removeTodo,
        editTodo,
    };
};

export default Project; 