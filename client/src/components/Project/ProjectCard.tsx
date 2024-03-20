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
    <div key={_id}  className="bg-slate-950 p-4 rounded-md hover:bg-slate-900 hover:cursor-pointer ease-in-out shadow-lg shadow-black flex justify-between">
      <div onClick={()=>navigate(`/projects/detail/${_id}`)} className="w-full">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-lg text-slate-300">{!description ? 'No description' : description }</p>
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md" onClick={handleDelete}>Delete</button>
    </div>
  )
}
