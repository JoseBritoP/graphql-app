import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT,GET_PROJECTS } from '../../graphql/projects';

export default function useProjectForm() {

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value
    setForm({
      ...form,
      [name]:value
    })
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createProject({
      variables:{
        name:form.name.trim(),
        description:form.description.trim()
      }
    });
    
    setForm({
      name:'',
      description:''
    })
  };

  return { form, loading, error, handleChange, handleSubmit }
}
