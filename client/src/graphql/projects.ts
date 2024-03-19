import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  {
    getProjects {
        _id,
        name,
        description,
        createdAt,
        updatedAt
      }
  }
`