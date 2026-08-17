//imports
import Project from "./project.js";

const ProjectManager = (() => {

    const projects = [];

    //methods
    const createProject = (input, existingID) => {
        const newProjectName = Project(input, existingID);
        projects.push(newProjectName);
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
        getProject
    }

})();

export default ProjectManager;