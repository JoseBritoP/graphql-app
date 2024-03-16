import startApolloServer  from "./app";
import { typeDefs,resolvers } from "./graphql/index";

startApolloServer(typeDefs,resolvers)

// import express from "express";

// const app = express();

// app.use('/',(req:any,res:any)=> res.send('Hello world'))
// app.listen(3001,()=>{
//   console.log(3001)
// })