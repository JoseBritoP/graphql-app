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
    <form onSubmit={handleSubmit} className='flex flex-col text-black gap-4 p-4'>
      {error && <p className='text-red-600'>{error.message}</p>}
      <div className='flex gap-x-4'>
        <label htmlFor="name" className='text-white'>Name</label>
        <input type="text" name='name' className='px-4' placeholder='Write a title' onChange={handleChange}/>
      </div>
      <div className='flex flex-col '>
        <label htmlFor="description" className='text-white'>Description</label>
      <textarea name="description"  cols={10} rows={2} placeholder='Write a description' className='resize-none' onChange={handleChange}/>
      </div>
      <button className='bg-emerald-700 p-2 w-1/2 text-white font-bold rounded-md' disabled={loading || !form.name || !form.description}>Save</button>
    </form>
  )
}
