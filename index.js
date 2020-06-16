const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphQLSchema = require('./graphQLSchema')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`app running in ${PORT}`)); 