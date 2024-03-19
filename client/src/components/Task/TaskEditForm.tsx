import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_TASK } from '../../graphql/tasks';

export default function TaskEditForm({id, setModal }:{ id:string, setModal:any }) {

  const [form,setForm] = useState({
    title:''
  });

  const [updateTask] = useMutation(UPDATE_TASK,{
    refetchQueries:['getProject']
  })

  const handleChange = (e:any) => {
    const name = e.target.name
    const value = e.target.value
    setForm({
      ...form,
      [name]:value
    })
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await updateTask({
      variables:{
        id,
        title:e.target.title.value,
      }
    });

    e.target.reset();
    setModal(false)
  };

  const handleCancel = () =>{
    setModal(false)
  }
  return (
    <form onSubmit={handleSubmit} className='bg-slate-800 p-4 flex items-center justify-between w-full gap-x-6'>
      <div className='flex gap-x-4'>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" className='text-lg px-2 rounded-sm text-black' placeholder='New title' onChange={handleChange} />
      </div>
      <div className='flex justify-between gap-x-2'>
        <button className='bg-emerald-600 hover:bg-emerald-700 p-1 rounded-sm px-2 disabled:bg-zinc-600 disabled:hover:cursor-default' disabled={!form.title}>Save</button>
        <button className='bg-red-600 hover:bg-red-700 p-1 rounded-sm px-2 disabled:bg-zinc-600 disabled:hover:cursor-default' 
          onClick={handleCancel}
        >Cancel</button>
      </div>
    </form>
  )
}
