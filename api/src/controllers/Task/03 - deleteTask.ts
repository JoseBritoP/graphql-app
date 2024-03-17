import Task from "../../models/Task";

export const deleteTask = async (_:any,{_id}:{_id:string}) => {

  const deletedTask = await Task.findByIdAndDelete({
    _id
  });

  if(!deletedTask) throw new Error(`Task to delete not found`);

  return {
    message:'Task delete successfully',
    deletedTask
  };
};