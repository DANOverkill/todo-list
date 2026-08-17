import createID from "./utils/createID.js";
import { compareAsc, format } from "date-fns";

const Todo = (name, dueDate, info, existingID) => {

    //declarations
    const id = createID(existingID);
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