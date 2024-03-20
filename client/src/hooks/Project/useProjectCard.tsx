import { useNavigate } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../../graphql/projects"

export default function useProjectCard({_id}:{_id:string}) {

  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT,{
    refetchQueries:["getProjects"]
  });

  const handleDelete = () => {
    deleteProject({
      variables:{
        id:_id
      }
    })
  };

  return { navigate, handleDelete }
}
