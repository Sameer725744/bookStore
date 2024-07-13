import React from 'react';
import images from "../../public/Book10.png";

export default function Banner() {
  return (<>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10" >
      <div className=" order-2 md:order-1 w-full md:w-1/2 mt-11 md:mt-30">
     <div className='space-y-10'>
     <h1 className="text-4xl md:text-6xl font-bold text-red-300 m-3 p-2">Welcome to Book Haven</h1>    
 <h4 className="text-4xl md:text-6xl ">Hello, Welcome Here To Learn Something
         <span className='text-sky-400 p-2'>New Everyday!</span>
         </h4>
     <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" 
  fill="currentColor" className="w-4 h-4 opacity-70">
    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
        
     </div>
<button className="btn btn-active w-40 btn-accent mt-5">Click</button>
        
        </div>
      <div className=' order-1 w-full md:w-1/2 m-3 '>
        <img src={images} className='w-95 h-95 m-10 pt-5 bg-blend-color-burn'  alt="" />
      </div>

    </div>
  </>
    
  )
}
