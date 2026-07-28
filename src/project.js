import createID from "./utils/createID.js";

const Project = (name) => {

    //declarations
    const todoList = [];
    const id = createID();
    
    //getters
    const getTodoList = () => todoList;

    return {
        name, 
        id, 
        getTodoList
    };
};

export default Project; 