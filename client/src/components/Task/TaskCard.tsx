import { FaEdit } from 'react-icons/fa'
import useTaskCard from '../../hooks/Task/useTaskCard'
import TaskEditForm from './TaskEditForm'
import { FaDeleteLeft } from 'react-icons/fa6'

interface TaskProps {
  _id:string
  title:string
}

export default function TaskCard({_id,title}:TaskProps) {

  const { modal, handleDelete, handleModal } = useTaskCard({_id})

  return (
    <div key={_id} className="flex gap-x-6 justify-between rounded-md items-center w-full bg-gray-950/60 p-4">
      <h2 className="text-lg font-medium">{title}</h2>
      {modal && <TaskEditForm id={_id}  handleModal={handleModal}/>}
      <div className="flex gap-x-2 justify-evenly items-center">
        <button aria-label='Edit Task' className="bg-orange-300 hover:bg-orange-400 hover:cursor-pointer px-3 py-2 transition-colors duration-300 ease-out font-semibold uppercase text-sm rounded-md"
          onClick={handleModal}
        ><FaEdit size={20} /></button>
        <button aria-label='Delete Task' className="bg-red-500 hover:bg-red-600 hover:cursor-pointer px-3 py-2 transition-colors duration-300 ease-out font-semibold uppercase text-sm rounded-md"
          onClick={handleDelete}  
          ><FaDeleteLeft size={20} /></button>
      </div>
    </div>
  )
}
