import createID from "./utils/createID.js";
import Todo from "./todo.js";

const Project = (name, existingID) => {

    //declarations
    const todoList = [];
    const id = createID(existingID);

    //Todo methods
    const addTodo = (name, dueDate, info, existingID) => {
        if (info === undefined) {
            let noInfo = '';
            todoList.push(Todo(name, dueDate, noInfo, existingID));
        } else {
           todoList.push(Todo(name, dueDate, info, existingID));
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
    
    const getTodo = (id) => {
        const index = todoList.findIndex(todo => todo.id === id);
        if (id === undefined) {
            return getTodoList();
        } else if (index === -1){
            return `ID ${id} does not exist. Please pass a valid ID`;
        }
        else {
            return todoList[index];
        };
    }

    return {
        name, 
        id,
        getTodoList,
        addTodo,
        removeTodo,
        editTodo,
        getTodo
    };
};

export default Project; 