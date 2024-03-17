import Project from "../../models/Project";

export const getProjects = async () => {
  const projects = await Project.find();

  if(!projects.length) throw new Error(`No projects`);

  return projects
};

export const getProject = async (_:any,{_id}:{_id:string}) => {
  // console.log(args)
  const project = await Project.findById({
    _id
  });

  if(!project) throw new Error(`Project not found`);

  return project
}