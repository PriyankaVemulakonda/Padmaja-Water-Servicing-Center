import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/car.jpg'
import gallery_2 from '../../assets/bike.jpg'
import gallery_3 from '../../assets/lorry.jpg'
import gallery_5 from '../../assets/tanker.jpeg'
import gallery_4 from '../../assets/auto.jpg'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div  className='campus' id='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_5} alt="" />

        </div>
        
    </div>
  )
}

export default Campus
