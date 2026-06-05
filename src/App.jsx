import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'



function App() {


  return (
    <div className='min-h-screen bg-[#1e1a17]'>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
