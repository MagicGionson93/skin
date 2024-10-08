import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import Workflow  from './components/Workflow'

const App = () => {
  return (
    <>
      <Navbar /> 
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Feature />
        <Workflow />
      </div>
    </>
  )
}

export default App