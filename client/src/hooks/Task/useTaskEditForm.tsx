import { useState, FormEvent, ChangeEvent } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_TASK } from '../../graphql/tasks'

export default function useTaskEditForm({id, handleModal }:{ id:string, handleModal:()=>void }) {

  const [form,setForm] = useState({
    title:''
  });

  const [updateTask] = useMutation(UPDATE_TASK,{
    refetchQueries:['getProject']
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name
    const value = e.target.value
    setForm({
      ...form,
      [name]:value
    })
  };

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateTask({
      variables:{
        id,
        title:form.title,
      }
    });

    // e.target.reset();
    setForm({
      title:''
    })
    handleModal()
  };

  const handleCancel = () =>{
    handleModal()
  };

  return { form, handleSubmit, handleCancel, handleChange }
}
