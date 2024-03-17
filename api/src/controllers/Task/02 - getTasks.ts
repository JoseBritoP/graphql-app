import Task from "../../models/Task";

export const getTasks = async () => {
  const tasks = await Task.find()

  if(!tasks.length) throw new Error(`No tasks`);

  return tasks
};

export const getTask = async (_:any,{_id}:{_id:string}) => {
  const task = await Task.findById({
    _id
  });

  if(!task) throw new Error(`Task not found`);

  return task
};