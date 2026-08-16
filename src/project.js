import createID from "./utils/createID.js";
import Todo from "./todo.js";

const Project = (name) => {

    //declarations
    const todoList = [];
    const id = createID();

    //Todo methods
    const addTodo = (name, info, dueDate) => {
        if (info === '') {
            let noInfo = '';
            todoList.push(Todo(name, noInfo, dueDate));
        } else {
           todoList.push(Todo(name, info, dueDate));
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
        todoList, 
        getTodoList,
        addTodo,
        removeTodo,
        editTodo,
    };
};

export default Project; 