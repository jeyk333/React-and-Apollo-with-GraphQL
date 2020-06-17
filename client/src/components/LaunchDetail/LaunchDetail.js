import React from 'react'

const LaunchDetail = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => {
  console.log(flight_number, mission_name, launch_date_local, launch_success)
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>{mission_name}</h4>
          <p>{launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <button>launch details</button>
        </div>
      </div>
    </div>
  )
}

export default LaunchDetail
