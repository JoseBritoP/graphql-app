import useTaskForm from '../../hooks/Task/useTaskForm';
export default function TaskForm() {

  const { form, handleChange, handleSubmit } = useTaskForm();

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-between w-full gap-x-6'>
      <div className='flex gap-x-4'>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" className='text-lg px-2 rounded-sm text-black' placeholder='Set Title Task...' onChange={handleChange} />
      </div>
      <button className='bg-emerald-600 hover:bg-emerald-700 p-1 rounded-sm px-2 disabled:bg-zinc-600 disabled:hover:cursor-default' disabled={!form.title}>Add tasks</button>
    </form>
  )
}
