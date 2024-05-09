import useTaskForm from '../../hooks/Task/useTaskForm';
export default function TaskForm() {

  const { form, handleChange, handleSubmit } = useTaskForm();

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-between w-full bg-slate-800 py-4 rounded-md  px-2'>
      <div className='flex justify-center items-center gap-x-4'>
        <label htmlFor="title" className='text-lg font-semibold'>Title</label>
        <input aria-label='Title task' type="text" name="title" id="title" className='text-lg px-2 rounded-sm py-1 text-black' placeholder='Set Title Task...' onChange={handleChange} />
      </div>
      <button aria-label='Add task' className='bg-emerald-600 hover:bg-emerald-700 py-2 rounded-r-lg font-semibold px-2 uppercase disabled:bg-zinc-600 disabled:hover:cursor-default' disabled={!form.title}>Add tasks</button>
    </form>
  )
}
