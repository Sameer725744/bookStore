import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-gradient-to-r from-gray-500 to-black-400">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
     
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
       onClick={()=> document.getElementById("my_modal_3").close()} >
        X</Link>

   
    <h3 className="font-bold text-black">login</h3>
    <div className='mt-4 space-y-2'> 
        <span className='text-black'>Email</span> 
        <br />
        <input type="email" 
        placeholder='Enter your Email' 
        className='w-80 px-3 py-1 border rounded-md outline-non'
        {...register("email", { required: true })}
      /> <br />
         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    {/*password */}
    <div className='mt-4 space-y-2'> 
        <span className='text-black'>Password</span> 
        <br/>
        <input type="password"
         placeholder='Enter your password' 
        className='w-80 px-3 py-1 border rounded-md outline-non'
        {...register("password", { required: true })}
        /> <br />
           {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/*Button */}
    <div className='flex justify-around mt-4'>
        <button type='submit' className='bg-gradient-to-r from-gray-600 to-blue-200 text-white rounded-md px-3 py-2 
         hover:-translate-y-1 duration-300'>login</button>
        
        <p>
            Not registered? <Link to="/signup"
            className='underline text-black-700 cursor-pointer hover:text-gray-400'>SignUp</Link>
        </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
