import TaskCard from "./TaskCard"

interface Props {
  tasks:{
    _id:string,
    title:string
  }[]
}
const TaskList = ({tasks}:Props) => {
  return (
    <section className="flex flex-col gap-4 bg-slate-900 p-4 w-full items-start shadow-md shadow-slate-800 h-auto overflow-y-auto max-h-[18rem]">
      {tasks.map((task)=>(
        <TaskCard
          key={task._id}
          _id={task._id}
          title={task.title}
        />
      ))}
      {!tasks.length && <p className="text-slate-400 text-lg underline py-2">No Tasks</p>}
    </section>
  )
}

export default TaskList
