import app from './'

app.listen(process.env.PORT,()=>{
  console.log(`Server on port ${process.env.PORT}`)
})
