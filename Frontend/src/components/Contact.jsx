import React from 'react';
import { Link } from 'react-router-dom';
import images from "../../public/img7.jpg";

function Contact() {
  return (
    <>
      <div className='flex items-center justify-center mt-20 bg-fit h-screen 
      bg-gradient-to-r from-black-800 to-gray-500 md:mt-20  md:shrink-0  '>
        <div className="w-[600px] bg-white bg-opacity-5 p-8 rounded-md shadow-md  ">
          <h3 className="font-bold m-5 text-black">Contact Us</h3>
          <div className='p-2 space-y-2'>
            <span className='text-black'>Name</span> <br />
            <input type="text" placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none' /> <br />
          </div>
          <div className='p-2 space-y-2'>
            <span className='text-black'>Email</span> <br />
            <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none' /> <br />
          </div>
          <div>
            <textarea placeholder="Type here" className="w-full px-3 py-1 border rounded-md outline-none h-32 m-2" />
          </div>
          <Link to="/">
            <button className='mt-6 bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 duration-300'>Submit</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
