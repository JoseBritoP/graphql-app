import { useState } from 'react'
import { useMutation } from "@apollo/client"
import { DELETE_TASK } from "../../graphql/tasks"

export default function useTaskCard({_id}:{_id:string}) {
  const [modal,setModal] = useState(false);

  const [deleteTask] = useMutation(DELETE_TASK,{
    refetchQueries:["getProject"]
  });

  const handleDelete = () => {
    deleteTask({
      variables: {
        id:_id
      }
    })
  };

  const handleModal = () => {
    setModal(!modal)
  }

  return { modal, handleDelete, handleModal }

}
