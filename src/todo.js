import createID from "./utils/createID.js";

const Todo = (name, dueDate) => {

    //declarations
    const id = createID();
    let completed = false;

    //Methods
    const setCompleted = () => {
        if (completed === false) {
            return completed = true;
        } else if (completed === true) {
            return completed = false;
        }
    };

    //Getters
    const getCompleted = () => completed;
            
    return {
        name, 
        id,
        dueDate,
        getCompleted,
        setCompleted
    };
};

export default Todo; 