import { ProjectList,ProjectForm } from "../components"

export default function Projects() {
  return (
    <main className="bg-zinc-900 rounded-lg shadow-lg shadow-black p-8 h-4/5 w-3/5">
      <h1 className="text-2xl font-bold py-2 mb-4">Project Manager</h1>
      <div className="flex flex-col items-center gap-y-6 lg:flex-row md:justify-between md:items-start gap-x-1 w-full">
        <ProjectForm/>
        <ProjectList/>
      </div>
    </main>
  )
}
