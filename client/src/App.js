import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css'
import Launches from './components/Launches'
import Routes from './routes'
import SolarBackGround from './components/SolarBackGround'

const client = new ApolloClient({
  uri: '/graphql',
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
