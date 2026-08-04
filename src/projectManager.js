//imports
import Project from "./project.js";

const ProjectManager = () => {

    const projects = [];

    const createProject = (input) => {
        const newProjectName = Project(input);
        projects.push(newProjectName);
    };

    const getProjects = () => projects;

    return {
        getProjects,
        createProject,
    }

}

export default ProjectManager;