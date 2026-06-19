import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './pages/Home'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'



export default function App() {


  return (
    <div className='min-h-screen bg-[#1e1a17]'>
      <ScrollToTop />
      <Navbar/> 
      {/* navbar and contact will be shown in all the pages. for this reason they are out of routes */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/projects/:slug' element={<ProjectDetail/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Contact/>
    </div>
  )
}

