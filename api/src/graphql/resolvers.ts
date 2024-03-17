import { createProject,getProjects,getProject,deleteProject } from "../controllers/Project";
import { createTask,getTasks,getTask,deleteTask } from "../controllers/Task";
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

export const resolvers = {
  Query: {
    books: () => books,
    getProjects,
    getProject,
    getTasks,
    getTask
  },
  Mutation: {
    createProject,
    createTask,
    deleteProject,
    deleteTask
  }
};