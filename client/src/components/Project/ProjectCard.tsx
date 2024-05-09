import { FaDeleteLeft } from "react-icons/fa6";
import useProjectCard from "../../hooks/Project/useProjectCard"

interface Props {
  _id:string,
  name:string,
  description:string,
  createdAt:string,
  updatedAt:string
}

export default function ProjectCard({_id,name,description}:Props) {

  const { navigate, handleDelete } = useProjectCard({_id});

  return (
    <div key={_id} className="bg-slate-900 p-4 rounded-md hover:bg-slate-950 cursor-pointer transition-colors duration-200 ease-in-out shadow-md flex justify-between">
      <div onClick={()=>navigate(`/projects/detail/${_id}`)} className="w-full">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-base text-slate-300 text-balance">{!description ? 'No description' : description }</p>
      </div>
      <button aria-label="Delete Project" className="bg-red-500 hover:bg-red-400 px-2 md:px-4 py-1 rounded-md" onClick={handleDelete}><FaDeleteLeft size={24}/></button>
    </div>
  )
}
