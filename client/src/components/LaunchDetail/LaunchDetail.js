import React from 'react'
import moment from 'moment'
import './LaunchDetail.css'

const LaunchDetail = ({ launch: { flight_number, mission_name, launch_date_utc, launch_success, details } }) => {
  return (
    <div className="card">
      <div className={launch_success ? 'green-success' : 'red-fail'}></div>
      <h4>
        <span>Mission Name</span> {mission_name}-{flight_number}
      </h4>
      <p>
        <span>Launched on</span>
        {moment(launch_date_utc).format('LLLL')}
      </p>
    </div>
  )
}

export default LaunchDetail
