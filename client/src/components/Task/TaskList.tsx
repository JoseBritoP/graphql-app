import TaskCard from "./TaskCard"

interface Props {
  tasks:{
    _id:string,
    title:string
  }[]
}
const TaskList = ({tasks}:Props) => {
  return (
    <div>
      {tasks.map((task)=>(
        <TaskCard
          key={task._id}
          _id={task._id}
          title={task.title}
        />
      ))}
      {!tasks.length && <p className="text-slate-400 text-lg underline py-2">No Tasks</p>}
    </div>
  )
}

export default TaskList
