import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Programs from './Components/Programs/Programs'
import Vehicles from './Components/Vehicles/Vehicle'
import Contact from './Components/Contacts/Contact'
import Campus from './Components/Campus/Campus'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className='container'>
        <Title subTitle='Services' title='What we Offer'/>
        <Vehicles/>
        <About/>
        <Title subTitle='Vehicles' title='More options offline'/>
        <Campus/>
    
        <Title subTitle='Our details' title='Talk with us'/>
        <Contact/>

      </div>
    </div>
  )
}

export default App
