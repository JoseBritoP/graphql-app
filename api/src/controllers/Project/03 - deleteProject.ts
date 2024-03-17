import Project from "../../models/Project";

export const deleteProject = async (_:any,{_id}:{_id:string}) => {
  //TODO: Eliminar tareas asociadas al proyecto eliminado

  const deletedProject = await Project.findByIdAndDelete({
    _id
  });

  if(!deletedProject) throw new Error(`Project not found`);

  return {
    message:'Project delete successfully',
    deletedProject
  }
};