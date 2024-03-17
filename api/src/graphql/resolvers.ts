import { createProject,getProjects,getProject,deleteProject,updateProject } from "../controllers/Project";
import { createTask,getTasks,getTask,deleteTask,updateTask } from "../controllers/Task";

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
    updateProject,
    deleteProject,
    createTask,
    updateTask,
    deleteTask
  }
};