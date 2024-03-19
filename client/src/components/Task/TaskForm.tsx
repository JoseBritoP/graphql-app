import { useState } from 'react'

export default function TaskForm() {
  const [form,setForm] = useState({
    title:''
  });

  const handleChange = (e:any) => {
    const name = e.target.name
    const value = e.target.value
    setForm({
      ...form,
      [name]:value
    })
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className='flex gap-x-6'>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" className='px-2 rounded-sm' placeholder='Title Task' onChange={handleChange} />
      <button className='bg-emerald-600 hover:bg-emerald-700'>Add tasks</button>
    </form>
  )
}
