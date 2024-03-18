import { createProject,getProjects,getProject,deleteProject,updateProject,tasks } from "../controllers/Project";
import { createTask,getTasks,getTask,deleteTask,updateTask,project } from "../controllers/Task";
import Project from "../models/Project";
import Task from "../models/Task";
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
  },

  // Agree Tasks
  Project:{
    tasks
  },

  // Agree Project
  Task:{
    project
  }
};

