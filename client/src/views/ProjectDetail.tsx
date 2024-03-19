import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_PROJECT_BY_ID } from "../graphql/projects";
import { TaskForm,TaskList } from "../components";
import { useNavigate } from "react-router-dom";

interface Tasks {
  _id:string
  title:string
}
interface DataProps {
  _id:string,
  name:string
  description:string
  tasks:Tasks[]
}

export default function ProjectDetail() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID,{
    variables:{
      id
    }
  });

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error.message}</p>

  const {_id, name, description, tasks }: DataProps = data.getProject;

  const handleGoBack = () => {
    navigate('/projects')
  }; 
  
  return (
    <section key={_id} className="p-10 rounded-md flex flex-col gap-4 items-start justify-center bg-slate-950 ">
      <div className="flex w-full px-2 justify-between items-center">
      <button onClick={handleGoBack} className="bg-sky-600 px-3 py-1 rounded-md hover:cursor-pointer hover:bg-sky-700 ease-in-out">Back</button>
      <button className="bg-orange-600 px-3 py-1 rounded-md hover:bg-orange-700 ease-in-out" >Edit</button>
      </div>
      <div>
      <h1 className="text-white text-4xl">{name}</h1>
      <p className="text-xl py-2">{!description ? "No description" : description}</p>
      </div>
      <TaskForm/>
      <TaskList tasks={tasks}/>
    </section>
  )
}
