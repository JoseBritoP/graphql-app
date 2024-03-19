import { gql } from "@apollo/client";

export const CREATE_TASK = gql `
  mutation($projectId: ID!, $title: String) {
    createTask(projectId: $projectId,title: $title) {
      _id,title,
      project {
        _id
      }
    }
  }
`;