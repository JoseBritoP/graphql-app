import Project from '../../models/Project'

interface Props {
  name:string
  description?:string
}

export const createProject = async (_:any,{name,description}:Props) => {
  const proyectFind = await Project.findOne({
    name
  });

  if(proyectFind) throw new Error(`The proyect called ${name} already exist`);
  const newProject = await new Project({name,description});
  const savedProyect = await newProject.save();
  return savedProyect
}