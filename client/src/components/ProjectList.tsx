import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../graphql/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if(loading) return <p className="text-white">Loading...</p>
  if(error) return <p className="text-white">Error</p>

  return (
    <div>
      <h1>Project List</h1>
      {
        data.getProjects.map((project:{id:string,name:string,description:string,createdAt:string,updatedAt:string})=> (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          createdAt={project.createdAt}
          updatedAt={project.createdAt}
        />
        ))
      }
    </div>
  )
}
