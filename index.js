const express = require('express')
const graphqlHTTP = require('express-graphql')
const spaceXSchema = require('./spaceXSchema')
const cors = require('cors')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: spaceXSchema,
    graphiql: true,
  })
)

// app.use(express.static('public'))

// app.get('*', (req,res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

app.listen(PORT, () => console.log(`app running in ${PORT}`))
