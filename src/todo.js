import createID from "./utils/createID.js";

const Todo = (name, dueDate) => {

    //declarations
    const id = createID();
    let completed = false;

    return {
        name, 
        id,
        dueDate,
        completed
    };
};

export default Todo; 