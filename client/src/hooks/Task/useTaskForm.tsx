import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_TASK } from '../../graphql/tasks'

export default function useTaskForm() {
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
  };

  return { form, handleChange, handleSubmit }
}
