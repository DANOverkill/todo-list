import ProjectManager from "../projectManager.js";

// sets local storage 
const setLocalStorage = (projectID) => {
    
    let project = ProjectManager.getProject(projectID);
    let projectData = {
        name: project.name,
        id: project.id,
        todoList: project.getTodoList() 
    };

    localStorage.setItem(project.id, JSON.stringify(projectData))
};


//retreaves local storage
const loadLocalStorage = (storageID) => {
    const projectData =  JSON.parse(localStorage.getItem(storageID));
    ProjectManager.createProject(projectData.name, projectData.id);
    let todoList = projectData.todoList;
    todoList.forEach(element => {
        ProjectManager.
        getProject(Number(storageID)).
        addTodo(element.name, element.dueDate, element.info, Number(element.id));

        if (element.completed === true) {
            ProjectManager.
            getProject(Number(storageID)).
            editTodo(Number(element.id), {completed: element.completed});
        }
    });
};

//export
export {setLocalStorage, loadLocalStorage};