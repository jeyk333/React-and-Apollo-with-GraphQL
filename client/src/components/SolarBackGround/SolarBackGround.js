import React from 'react'
import './SolarBackGround.css'

const IntroSection = ({ children }) => {
  return (
    <div class="solar-syst">
      <div class="sun"></div>
      <div class="mercury"></div>
      <div class="venus"></div>
      <div class="earth"></div>
      <div class="mars"></div>
      <div class="jupiter"></div>
      <div class="saturn"></div>
      <div class="uranus"></div>
      <div class="neptune"></div>
      <div class="pluto"></div>
      <div class="asteroids-belt"></div>
      {children}
    </div>
  )
}

export default IntroSection