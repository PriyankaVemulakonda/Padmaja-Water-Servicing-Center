import React from 'react'
import './About.css'
import aboutimg from '../../assets/aboutimg.jpg'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about' id='about'>
    <div class='about-left'>
        <img src={aboutimg} alt="" className='about-img' />
 
    </div>
    <div class='about-right'>
       <h3>About us</h3>
       <h2>Refresh Your Ride! Experience Quality and Happiness at Our Vehicle Water Servicing Center.</h2>
        <p>Padmaja Water Servicing Centre, located near G. Konduru junction on the Vijayawada-Mylavaram bypass road, provides top-quality 
            car washing and meticulous vehicle care. Our skilled team ensures thorough
             treatment, preserving your vehicle's appearance and value. From routine washes to specialized detailing,
             we offer comprehensive services using advanced techniques and high-quality products. Experience 
             excellence and convenience with Padmaja Water Servicing Centre, your trusted destination for premium car care</p>   
    </div>



    </div>
  )
}

export default About
