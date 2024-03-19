import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../../graphql/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if(loading) return <p className="text-white">Loading...</p>
  if(error) return <p className="text-white">Error</p>

  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Project List</h1>
      <section className="flex flex-col flex-wrap gap-4 justify-start">
        {
          data.getProjects.map((project:{_id:string,name:string,description:string,createdAt:string,updatedAt:string})=> (
            <ProjectCard
            key={project._id}
            _id={project._id}
            name={project.name}
            description={project.description}
            createdAt={project.createdAt}
            updatedAt={project.createdAt}
            />
            ))
          }
      </section>
    </main>
  )
}
