import express from 'express';

const app = express();

app.get('/',(req,res)=>{
  res.send('gql')
});

app.listen(8080,()=>{
  console.log("server up")
})