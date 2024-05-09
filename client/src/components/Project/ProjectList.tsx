import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../graphql/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { loading, data } = useQuery(GET_PROJECTS);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <article className="overflow-y-auto h-[50rem] flex flex-col gap-4 w-full px-5">
      <section className="h-auto max-h-[45rem] overflow-y-auto bg-slate-800 flex flex-col  gap-y-4 justify-start w-full">
        {data && data.getProjects.map(
          (project: {
            _id: string;
            name: string;
            description: string;
            createdAt: string;
            updatedAt: string;
          }) => (
            <ProjectCard
              key={project._id}
              _id={project._id}
              name={project.name}
              description={project.description}
              createdAt={project.createdAt}
              updatedAt={project.createdAt}
            />
          )
        )}
        {data === undefined && <p className="font-bold text-center p-4 cursor-default">Create a project to manage here</p>}
      </section>
    </article>
  );
}
