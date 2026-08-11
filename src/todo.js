import createID from "./utils/createID.js";

const Todo = (name, info ,dueDate) => {

    //declarations
    const id = createID();
    let completed = false;

    return {
        name, 
        id,
        info,
        dueDate,
        completed
    };
};

export default Todo; 