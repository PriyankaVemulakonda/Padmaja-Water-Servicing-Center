import React from 'react'
import './Vehicle.css'
import program_1 from '../../assets/water.jpg'
import program_2 from '../../assets/foam.jpg'




const Vehicle= () => {
  return (
    <div className='programs' id='vehicle'>
        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <h2>Liquid</h2>
            <p>Vehicle is washed with liquid like water and cleaning liquids </p>
          </div>
        </div>
        <div className="program">
          <img src={program_2} alt="" />
          <div className="caption">
          <h2>Liquid</h2>
            <p>Vehicle is washed with foam</p>
          </div>
        </div>
        
    </div>
  );
}


export default Vehicle

