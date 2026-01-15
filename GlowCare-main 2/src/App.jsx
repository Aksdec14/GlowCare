import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import SkincareChat from './component/ChatSection'
import About from './component/About'
import SkinChecker from './component/SkinChecker'
import Service from './component/Services'
import NearbyMap from './component/Nearby'
import Footer from './component/Footer'
import SkincareNotification from './component/SkincareNotification'
import SkincareAnalyzer from './component/SkincareAnalyzer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SkincareNotification/>
      <SkincareChat/>
      <SkincareAnalyzer/>
      <About/>
      <SkinChecker/>
      <Service/>
      <NearbyMap/>
      <Footer/>
    </div>
  )
}

export default App
