import React from 'react'
import './SolarBackGround.css'

const IntroSection = ({ children }) => {
  return (
    <div class="solar-syst">
      <div class="sun system"></div>
      <div class="mercury system"></div>
      <div class="venus system"></div>
      <div class="earth system"></div>
      <div class="mars system"></div>
      <div class="jupiter system"></div>
      <div class="saturn system"></div>
      <div class="uranus system"></div>
      <div class="neptune system"></div>
      <div class="pluto system"></div>
      <div class="asteroids-belt system"></div>
      {children}
    </div>
  )
}

export default IntroSection
