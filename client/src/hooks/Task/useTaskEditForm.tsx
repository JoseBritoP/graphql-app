import { useState} from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_TASK } from '../../graphql/tasks'

export default function useTaskEditForm({id, handleModal }:{ id:string, handleModal:()=>void }) {

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
    handleModal()
  };

  const handleCancel = () =>{
    handleModal()
  };

  return { form, handleSubmit, handleCancel, handleChange }
}
