import React from 'react'
import './RocketDetail.css'

const LaunchDetail = ({ rocket: { rocket_name, rocket_type } }) => {
  return (
    <div className="rocketCard">
      <h4>
        <span>Name</span> {rocket_name}
      </h4>
      <p>
        <span>Type</span>
        {rocket_type}
      </p>
    </div>
  )
}

export default LaunchDetail
