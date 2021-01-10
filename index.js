import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql'

const app = express();

app.get('/',(req,res)=>{
  res.send('gql')
});

const root = { friend: ()=> {
  return{
    "id":387638767682,
    "firstName":"Eduardo",
    "lastName":"Ramos",
    "gender":"Male",
    "email":[
      {email:"me@me.com"},
      {email:"you@you.com"}
    ]
  }
}};

app.use('/graphql', graphqlHTTP({
  schema:schema,
  rootValue:root,
  graphiql:true,
}))

app.listen(8080,()=>{
  console.log("server up")
})