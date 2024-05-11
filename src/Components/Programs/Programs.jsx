import React from 'react'
import './Programs.css'
import program_1 from '../../assets/car.jpg'
import program_2 from '../../assets/bike.jpg'
import program_3 from '../../assets/lorry.jpg'


const Programs = () => {
  return (
    <div className='programs' id='program'>
      <div className="main">
          <div className="first">
          <img src={program_1} alt="" /></div>
          <div className="second">
          <img src={program_2} alt="" /></div>
          <div className="third">
          <img src={program_3} alt="" /></div></div>
          

          
          
    </div>
  )
}



export default Programs
