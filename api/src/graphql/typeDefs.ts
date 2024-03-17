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

  type Query {
    books: [Book],
    getProjects:[Project]
  }
  type Mutation {
    createProject(name:String,description:String):Project
  }
`;
