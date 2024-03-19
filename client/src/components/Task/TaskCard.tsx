
interface TaskProps {
  _id:string
  title:string
}
export default function TaskCard({_id,title}:TaskProps) {
  return (
    <div key={_id} className="flex gap-x-6 justify-center items-center">
      <h2 className="text-lg font-medium">{title}</h2>
      <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer px-2 py-1 text-sm rounded-md">Delete</button>
    </div>
  )
}
