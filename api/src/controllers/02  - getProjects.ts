import Project from "../models/Project";

export const getProjects = async () => {
  const projects = await Project.find();

  if(!projects.length) throw new Error(`No projects`);

  return projects
};