
import { useMutation } from "@apollo/client"
import { DELETE_TASK } from "../../graphql/tasks"
interface TaskProps {
  _id:string
  title:string
}
export default function TaskCard({_id,title}:TaskProps) {
   const [deleteTask] = useMutation(DELETE_TASK,{
    refetchQueries:["getProject"]
   });

   const handleDelete = () => {
    deleteTask({
      variables: {
        id:_id
      }
    })
   }
  return (
    <div key={_id} className="flex gap-x-6 justify-between rounded-sm items-center w-full">
      <h2 className="text-lg font-medium">{title}</h2>
      <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer px-2 py-1 text-sm rounded-md"
        onClick={handleDelete}  
      >Delete</button>
    </div>
  )
}
