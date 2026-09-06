//imports
import Project from "./project.js";

const ProjectManager = (() => {

    const projects = [];

    //methods
    const createProject = (input, existingID) => {
        const newProject = Project(input, existingID);
        projects.push(newProject);
        return newProject;
    };

    const removeProject = (id) => {
        const index = projects.findIndex(project => project.id === id);
        if (index !== -1) {
            projects.splice(index, 1);
        }
    };

    const editProject = (id, updates) => {
        const project = projects.find(project => project.id === id);
        if (project) {
            Object.assign(project, updates);
        }
    };

    //getters
    const getProjectsList = () => projects;
    const getSpecificProject = (i) => projects[i];

    const getProject = (id) => {
        const index = projects.findIndex(project => project.id === id);
        if (id === undefined) {
            return getProjectsList();
        } else if (index === -1){
            return `ID ${id} does not exist. Please pass a valid ID`;
        }
        else {
            return getSpecificProject(index);
        };
    };

    return {
        createProject,
        getProject,
        removeProject,
        editProject
    };

})();

export default ProjectManager;