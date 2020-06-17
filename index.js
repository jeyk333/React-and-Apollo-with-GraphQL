const express = require('express')
const graphqlHTTP = require('express-graphql')
const graphQLSchema = require('./graphQLSchema')
const cors = require('cors')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  })
)

app.use(express.static('public'))

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => console.log(`app running in ${PORT}`))
