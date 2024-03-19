import { useNavigate } from "react-router-dom"

interface Props {
  _id:string,
  name:string,
  description:string,
  createdAt:string,
  updatedAt:string
}

export default function ProjectCard({_id,name,description}:Props) {
  const navigate = useNavigate();
  return (
    <div key={_id} onClick={()=>navigate(`/projects/detail/${_id}`)} className="bg-slate-950 p-4 rounded-md hover:bg-slate-900 hover:cursor-pointer ease-in-out">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg text-slate-300">{!description ? 'No description' : description }</p>
    </div>
  )
}
