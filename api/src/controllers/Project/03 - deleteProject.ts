import Project from "../../models/Project";
import Task from "../../models/Task";
export const deleteProject = async (_:any,{_id}:{_id:string}) => {

  const deletedProject = await Project.findByIdAndDelete({
    _id
  });

  if(!deletedProject) throw new Error(`Project not found`);

  await Task.deleteMany({projectId:deletedProject._id});
  return {
    message:'Project delete successfully',
    deletedProject
  }
};