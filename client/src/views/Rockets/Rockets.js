import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Header from '../../components/Header'
import './Rockets.css'
import RocketDetail from '../../components/RocketDetail'
import RocketLoader from '../../components/RocketLoader'

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      rocket_id
      rocket_name
      rocket_type
    }
  }
`

class Rockets extends Component {
  render() {
    return (
      <div className="rockets">
        <Header />
        <h1>Rockets</h1>
        <div className="rocketsWrapper">
          <Query query={ROCKETS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <RocketLoader />
              if (error) return console.log(error)
              return (
                <>
                  {data.rockets.map((rocket) => (
                    <RocketDetail key={rocket.rocket_id} rocket={rocket} />
                  ))}
                </>
              )
            }}
          </Query>
        </div>
      </div>
    )
  }
}

export default Rockets
