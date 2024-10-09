import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import Workflow  from './components/Workflow'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar /> 
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection />
        <Feature />
        <Workflow />
        <Pricing />
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default App