import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login'

function Signup() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
   <>
   
   <div className='flex h-screen items-center justify-center bg-gradient-to-r from-gray-500 to-black-300 ' >
   
   <div  className=" w-[600px] bg-white bg-opacity-0 p-8 rounded-md ">
 
  <div className="modal-box bg-gradient-to-r from-black-300 to-gray-400 drop-shadow-xl
   hover:-translate-y-1 ease-in-out motion-reduce:transition-none ">
    
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
        </Link>
   
    {/*User Name */}
    <h3 className="font-bold text-black">SignUp</h3>
    <div className='mt-4 space-y-2'> 
        <span className='text-white'>Name</span> <br />
        <input type="text" placeholder='Enter your Name' 
        className='w-80 px-3 py-1 border rounded-md outline-non'
        {...register("name", { required: true })}
        /> <br />
         {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

 {/*Email */}
    <div className='mt-4 space-y-2'> 
        <span className='text-white'>Email</span> <br />
        <input type="email" placeholder='Enter your Email' 
        className='w-80 px-3 py-1 border rounded-md outline-non'
        {...register("email", { required: true })}
        /> <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    
    {/*password */}
    <div className='mt-4 space-y-2'> 
        <span className='text-white'>Password</span> <br />
        <input type="password" placeholder='Enter your password' 
        className='w-80 px-3 py-1 border rounded-md outline-non'
        {...register("password", { required: true })}
        /> <br />
         {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    
    {/*Button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-gradient-to-7 from-black-300 to-sky-100 text-white rounded-md px-1 py-1  hover:bg-gradient-to-r from-black-700 to-sky-500 hover:translate-y-1  duration-300'>Signup</button>
        <p className='text-xl text-gradient-r from-black-500 to-gray-400'>
         Have Account?{" "}
            <button
            className='p-1 underline text-black-500 cursor-pointer hover:-translate-y-2 '
            onClick={()=>
                document.getElementById("my_modal_3").showModal()
            }

            >Login</button>
            <Login />
        </p>
    </div>
    </form>
  </div>
</div>
   </div>
   </>
  )
}

export default Signup
