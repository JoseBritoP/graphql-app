import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../../graphql/tasks';
import { useParams } from 'react-router-dom';
export default function TaskForm() {

  const { id } = useParams();
  const [form,setForm] = useState({
    title:''
  });

  const [createTask] = useMutation(CREATE_TASK,{
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
    await createTask({
      variables:{
        title:e.target.title.value,
        projectId:id
      }
    });

    e.target.reset();
    e.target.title.focus();
  }
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
