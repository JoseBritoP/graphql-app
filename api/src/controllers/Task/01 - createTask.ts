import Project from "../../models/Project";
import Task from "../../models/Task";


interface Props {
  title:string,
  projectId:string
}
export const createTask = async(_:any,{title,projectId}:Props) => {

  const project = await Project.findOne({
    _id:projectId
  });

  if(!project) throw new Error(`The project ${projectId} don't exist`);

  const newTask = await Task.create({title,projectId});
  if(!newTask) throw new Error(`An error has ocurred creating the task`);

  const savedTask = await newTask.save();

  return savedTask
};