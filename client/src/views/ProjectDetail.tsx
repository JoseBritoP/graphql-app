import { useState } from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_PROJECT_BY_ID } from "../graphql/projects";
import { TaskForm,TaskList } from "../components";
import { useNavigate } from "react-router-dom";
import ProjectEditForm from "../components/Project/ProjectEditForm";
import { FaEdit,FaBackward } from 'react-icons/fa';

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

  const [modal,setModal] = useState(false);
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
  
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <article key={_id} className="p-10 rounded-md flex flex-col gap-4 items-start justify-start bg-slate-950 min-h-[40rem] h-auto max-h-[60rem]  transition-all duration-300 ease-in ">
      <section className="flex w-full px-2 justify-between items-center">
        <button aria-label='Back to home' onClick={handleGoBack} className="transition-colors duration-300 bg-sky-600 px-4 font-semibold uppercase py-2 rounded-md hover:cursor-pointer hover:bg-sky-700 ease-in-out">
          <FaBackward size={20} />
          </button>
        <button aria-label='Edit project' className="bg-teal-500 transition-colors duration-300 px-4 font-semibold uppercase py-2 rounded-md hover:bg-teal-600 ease-in-out" 
          onClick={handleModal}
        ><FaEdit size={20} /></button>
      </section>
      <section className='flex flex-col justify-center w-full h-auto max-h-[9rem] gap-3 p-4 pl-1  '>
        <h1 className="text-gray-200 font-bold text-4xl">{name}</h1>
        <p className="text-xl text-gray-400 py-2">{!description ? "No description" : description}</p>
      </section>
      {modal && (
        <div className='relative w-full'>
          <ProjectEditForm project={data.getProject} handleModal={handleModal}/>
        </div>
      )}
      <TaskForm/>
      <TaskList tasks={tasks}/>
    </article>
  )
}
