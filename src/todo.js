import createID from "./utils/createID.js";

const Todo = (name, dueDate) => {

    //declarations
    const id = createID();
            
    return {
        name, 
        id,
        dueDate,
    };
};

export default Todo; 