import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../../graphql/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if(loading) return <p className="text-white">Loading...</p>
  if(error) return <p className="text-white">Error</p>

  return (
    <section className="overflow-y-auto h-[50rem] flex flex-col gap-4 p-4 w-full px-5">
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
  )
}
