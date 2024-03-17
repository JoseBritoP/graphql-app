import { gql } from 'graphql-tag'
export const typeDefs = gql`#graphql
  type Book {
    title: String
    author: String
  }

  type Project {
    _id:ID
    name:String
    description:String
    createdAt:String
    updatedAt:String
  }

  type Task {
    _id:ID
    title:String
    projectId:ID
    createdAt:String
    updatedAt:String
  }

  type Query {
    books: [Book]
    getProjects:[Project]
    getProject(_id:ID!):Project
    getTasks:[Task]
    getTask(_id:ID!):Task
  }

  type Mutation {
    createProject(name:String,description:String):Project
    deleteProject(_id:ID!):Project
    updateProject(_id:ID!,name:String,description:String):Project
    createTask(title:String,projectId:ID!):Task
    deleteTask(_id:ID!):Task
    updateTask(_id:ID!,title:String,description:String,projectId:ID):Task
  }
`;
