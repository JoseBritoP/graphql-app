import useProjectEditForm from '../../hooks/Project/useProjectEditForm';

interface Props {
  project: {
    _id:string,
    name:string,
    description?:string
  },
  handleModal:()=>void
}

export default function ProjectEditForm({project,handleModal}:Props) {

  const { form, loading, error, handleChange, handleSubmit } = useProjectEditForm({project,handleModal})

  if(loading) return <p className='text-white text-xl'>Loading...</p>
  
  return (
    <div className='flex flex-col gap-y-2 transition-all duration-300 ease-in-out'>
      <h1 className='text-center text-xl font-bold'>Edit Form</h1>
      <form onSubmit={handleSubmit} className='flex flex-col rounded-md text-black gap-4 p-4 bg-slate-800 w-full h-60 py-6' >
        {error && <p className='text-red-600'>{error.message}</p>}
        <div className='flex items-center gap-x-4 w-full'>
          <label htmlFor="name" className='text-white text-lg'>New name</label>
          <input type="text" name='name' id='name' className='px-4 py-1 rounded-sm font-medium' placeholder='Write new name...' value={form.name} onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="description" className='text-white text-lg'>Description</label>
        <textarea name="description" id='description' placeholder='Write new description' value={form.description} className='resize-none px-4 py-1 rounded-sm' onChange={handleChange}/>
        </div>
        <div className='flex justify-between gap-x-4'>
        <button className='text-white text-lg bg-emerald-600 hover:bg-emerald-700 p-1 rounded-sm px-2 disabled:bg-zinc-600 disabled:hover:cursor-default disabled:text-slate-950' disabled={!form.name && !form.description || form.name === project.name }>Save changes</button>
        <button className='text-lg text-white bg-red-600 hover:bg-red-700 p-1 rounded-sm px-2 disabled:bg-zinc-600 disabled:hover:cursor-default' 
            onClick={handleModal}
            >Cancel</button>
        </div>
      </form>
    </div>
  )
}
