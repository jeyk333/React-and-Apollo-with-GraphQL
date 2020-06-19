import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Header from '../../components/Header'
import './Launches.css'
import LaunchDetail from '../../components/LaunchDetail'
import RocketLoader from '../../components/RocketLoader'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_utc
      launch_success
      details
    }
  }
`

class Launches extends Component {
  render() {
    return (
      <div className="launches">
        <Header />
        <div className="launchWrapper">
          <Query query={LAUNCHES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <RocketLoader />
              if (error) return console.log(error)
              console.log(data)
              return (
                <>
                  {data.launches.map((launch) => (
                    <LaunchDetail key={launch.flight_number} launch={launch} />
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

export default Launches
