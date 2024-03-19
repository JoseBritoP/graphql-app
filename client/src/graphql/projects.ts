import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getProjects  {
    getProjects {
        _id,
        name,
        description,
        createdAt,
        updatedAt
      }
  }
`

export const GET_PROJECT_BY_ID = gql`
  query getProject ($id: ID!) {
    getProject(_id: $id) {
      _id,name,description,tasks {
        _id,title
      }
    }
  }
`

export const CREATE_PROJECT = gql`
  mutation($name: String, $description: String) {
    createProject(name: $name,description: $description) {
      _id,name,description
    }
  }
`

export const UPDATE_PROJECT = gql`
  mutation($id: ID!, $name: String, $description: String) {
  updateProject(_id: $id,name: $name,description: $description) {
    _id,name,description
  }
}
`

export const DELETE_PROJECT = gql `
  mutation($id: ID!) {
  deleteProject(_id: $id) {
    _id,
    name,
    tasks {
      _id,title
    }
  }
}
`