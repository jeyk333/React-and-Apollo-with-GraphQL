import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css'
import Routes from './routes'
import SolarBackGround from './components/SolarBackGround'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <SolarBackGround>
        <Routes />
      </SolarBackGround>
    </ApolloProvider>
  )
}

export default App
