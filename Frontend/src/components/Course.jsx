import React from 'react'
import Cards from '../components/Cards'
import list from '../../public/list.json'
import {Link} from "react-router-dom"
function Course() {
  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto md:pc-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl'>
        We're Delighted to have you <span className='text-yellow-300'>Here!</span>
      </h1>
      <p className='mt-9 text-violet-400'>Our e-Book store offers a variety of courses for everyone. You can learn web development, data science, digital marketing, graphic design, and more.
         Each course is created by experts, so you'll get the latest and most practical knowledge. 
         Whether you're just starting or want to improve your skills, there's a course for you. 
         Join us and start learning today! </p>
          {/* Return to the Home page*/ }
         
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
       {
         list.map((item)=>(
          <Cards key={item.id} item={item}/> 

         ))
       }
    </div>
    <div className='flex justify-center'>
    <Link to="/"> 
         <button className=' mb-6 bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 duration-300'>Back</button>
          </Link></div>
   </div>
   </>
  )
}

export default Course
