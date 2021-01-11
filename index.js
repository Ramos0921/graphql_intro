import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

const app = express();

app.get('/',(req,res)=>{
  res.send('gql')
});


app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql:true,
}))

app.listen(8080,()=>{
  console.log("server up")
})