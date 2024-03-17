// import { gql } from 'graphql-tag'
// export const typeDefs = gql`#graphql
//   type Book {
//     title: String
//     author: String
//   }
//   type Project {
//     _id:ID
//     name:String
//     description:String
//     createAt:String
//     updateAt:String
//   }

//   type Query {
//     books: [Book]
//   }
//   type Mutation {
//     createProject(name:String,description:String):Project
//   }
// `;

// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];

// // Resolvers define how to fetch the types defined in your schema.
// // This resolver retrieves books from the "books" array above.
// const createProject = (_:any,args:any) => {
//   console.log(args)
//   return {

//   }
// }
// export const resolvers = {
//   Query: {
//     books: () => books,
//   },
//   Mutation: {
//     createProject
//   }
// };

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

export {
  resolvers,typeDefs
}