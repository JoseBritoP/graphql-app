interface Props {
  id:string,
  name:string,
  description:string,
  createdAt:string,
  updatedAt:string
}

export default function ProjectCard({id,name,description}:Props) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
