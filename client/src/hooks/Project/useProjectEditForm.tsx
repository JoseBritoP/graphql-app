import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_PROJECT,GET_PROJECTS } from '../../graphql/projects';

interface Props {
  project: {
    _id:string,
    name:string,
    description?:string
  },
  handleModal:()=>void
}

export default function useProjectEditForm({project,handleModal}:Props) {

  const [form,setForm] = useState({
    name:project.name,
    description:project.description
  });

  const [updateProject,{ loading, error } ] = useMutation(UPDATE_PROJECT, {
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
    updateProject({
      variables:{
        id:project._id,
        name:form.name,
        description:form.description
      }
    });
    handleModal();
  };

  return { form, loading, error, handleChange, handleSubmit }
}
