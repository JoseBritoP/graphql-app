import Project from "../../models/Project";

export const updateProject = async(_:any,args:{_id:string,name:string,description?:string} ) => {

  if(!args.name && !args.description) throw new Error(`Faltan datos`)

  const data = {
    name:args.name,
    description:args.description
  }
  const updatedProject = Project.findByIdAndUpdate(args._id,data,{new:true});;

  if(!updatedProject) throw new Error(`Project not found`);

  return updatedProject
};