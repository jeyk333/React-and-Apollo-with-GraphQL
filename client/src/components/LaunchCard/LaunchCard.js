import React from 'react'
import moment from 'moment'
import './LaunchCard.css'
import { Link } from 'react-router-dom'

const LaunchDetail = ({ launch: { flight_number, mission_name, launch_date_utc, launch_success, details } }) => {
  return (
    <Link className="card" to={`/launches/${flight_number}`}>
      <div className={launch_success ? 'green-success' : 'red-fail'}></div>
      <h4>
        <span>Mission Name</span> {mission_name}-{flight_number}
      </h4>
      <p>
        <span>Launched on</span>
        {moment(launch_date_utc).format('LLLL')}
      </p>
    </Link>
  )
}

export default LaunchDetail
