import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

app.use('/',(req:any,res:any)=>{
  res.send('Hello world')
});

export default app;