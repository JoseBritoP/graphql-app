import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT,GET_PROJECTS } from '../../graphql/projects';
export default function ProjectForm() {

  const [form,setForm] = useState({
    name:'',
    description:''
  });

  const [createProject,{ loading, error } ] = useMutation(CREATE_PROJECT, {
    refetchQueries:[
      {
        query:GET_PROJECTS
      },
      "GetProjects"
    ]

    
  })

  const handleChange = (e:any) => {
    const name = e.target.name;
    const value = e.target.value
    setForm({
      ...form,
      [name]:value
    })
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    createProject({
      variables:{
        name:form.name,
        description:form.description
      }
    })
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col rounded-md text-black gap-4 p-4 w-2/5 bg-slate-950 h-60 py-6'>
      {error && <p className='text-red-600'>{error.message}</p>}
      <div className='flex items-center gap-x-4'>
        <label htmlFor="name" className='text-white text-lg'>Name</label>
        <input type="text" name='name' id='name' className='px-4 py-1 rounded-sm' placeholder='Write a title' onChange={handleChange}/>
      </div>
      <div className='flex flex-col gap-y-2'>
        <label htmlFor="description" className='text-white text-lg'>Description</label>
      <textarea name="description" id='description' placeholder='Write a description' className='resize-none px-4 py-1 rounded-sm' onChange={handleChange}/>
      </div>
      <button className='bg-sky-700 py-2 px-1  text-white font-bold rounded-md hover:bg-sky-800 ease-in-out hover:cursor-pointer disabled:bg-zinc-400 disabled:cursor-default' disabled={loading || !form.name}>Create</button>
    </form>
  )
}
