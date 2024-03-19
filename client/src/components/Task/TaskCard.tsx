
interface TaskProps {
  _id:string
  title:string
}
export default function TaskCard({_id,title}:TaskProps) {
  return (
    <div key={_id}>
      <h2 className="text-lg">{title}</h2>
    </div>
  )
}
