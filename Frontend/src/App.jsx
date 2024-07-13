import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import ContactUs from './Contact/ContactUs'
import Signup from './components/Signup'
import AboutUs from './About/AboutUs'
function App() {
  return (
   <>
   {/*
   <Home></Home>
  <Course />*/}

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/course' element={<Courses />} />
    <Route path='/contact' element={<ContactUs />}/>
    <Route path='/about' element={<AboutUs />} />
    <Route path='/signup' element={<Signup/>} />
  </Routes>

   </>
  )
}

export default App
