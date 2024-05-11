import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>Padmaja Water Servicing Centre</h1>
        <p> specializes in foam wash treatments, providing meticulous car care near G. Konduru junction. Our expert team ensures thorough cleaning, 
            leaving your vehicle spotless and rejuvenated. Experience excellence and convenience with our premium foam wash service,
             delivering exceptional results every time</p>
             <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
