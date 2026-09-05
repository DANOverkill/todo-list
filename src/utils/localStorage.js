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
    projectData = JSON.parse(localStorage.getItem('userData'))
};

//export
export {setLocalStorage, loadLocalStorage};