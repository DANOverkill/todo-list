//imports
import Project from "./project.js";

const ProjectManager = () => {

    const projects = [];

    //methods
    const createProject = (input) => {
        const newProjectName = Project(input);
        projects.push(newProjectName);
    };

    //getters
    const getProjectsList = () => projects;
    const getSpecificProject = (i) => projects[i];

    const getProject = (id) => {
        const index = projects.findIndex(project => project.id === id);
        if (id === undefined) {
            return getProjectsList();
        } else {
            return getSpecificProject(index);
        };
    };

    return {
        createProject,
        getProject
    }

}

export default ProjectManager;