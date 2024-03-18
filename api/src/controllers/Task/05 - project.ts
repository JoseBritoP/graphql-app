import Task from "../../models/Task";
import Project from "../../models/Project";

interface Props {
  projectId:string
}

export const project = async (parent:Props) => {
  const projectById = await Project.findById(parent.projectId);
  // console.log(projectById)
  return projectById
}
