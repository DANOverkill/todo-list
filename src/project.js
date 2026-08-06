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

    const editTodo = (id, name, dueDate) => {
        const oldTodoIndex = todoList.findIndex(todo => todo.id === id);
        const newTodo = addTodo(name, dueDate);
        if (oldTodoIndex !== -1) {
            todoList.splice(oldTodoIndex, 1, addTodo(name, dueDate));
        }
    };
    
    //getters
    const getTodoList = () => todoList;

    return {
        name, 
        id, 
        getTodoList,
        addTodo,
        removeTodo,
        editTodo
    };
};

export default Project; 