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
    <div key={_id} onClick={()=>navigate(`/projects/detail/${_id}`)}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
