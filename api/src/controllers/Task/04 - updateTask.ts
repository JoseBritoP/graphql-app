import Task from "../../models/Task";

export const updateTask = async (_:any,args:{_id:string,title?:string,description?:string}) => {
  
  const data = {
    title:args.title,
    description:args.description
  };
  const updatedTask = await Task.findByIdAndUpdate(
    args._id,data,{new:true}
  );

  if(!updatedTask) throw new Error(`Task not found`);

  return updatedTask

};