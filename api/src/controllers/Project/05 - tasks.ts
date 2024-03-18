import Task from "../../models/Task";
import Project from "../../models/Project";

interface Props {
  _id:string
  name:string,
  description?:string
}

export const tasks = async (parent:Props) => {
  const tasks = await Task.find({projectId:parent._id});
  return tasks
};
