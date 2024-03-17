import startApolloServer  from "./app";
import { typeDefs,resolvers } from "./graphql/index";
import { connectDB } from "./config/db";

connectDB();

startApolloServer(typeDefs,resolvers)

// import express from "express";

// const app = express();

// app.use('/',(req:any,res:any)=> res.send('Hello world'))
// app.listen(3001,()=>{
//   console.log(3001)
// })