import Task from "../../models/Task";

export const getTasks = async () => {
  const tasks = await Task.find()

  if(!tasks.length) throw new Error(`No tasks`);

  return tasks
};