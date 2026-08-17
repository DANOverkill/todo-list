import createID from "./utils/createID.js";
import { compareAsc, format } from "date-fns";

const Todo = (name, dueDate, info, ExistingID) => {

    //declarations
    const id = createID(ExistingID);
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