import React, { useState } from 'react'

const Login = () => {

  const [state,setState] = useState('Sign Up')

  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const [name,SetName] = useState('')

  const onSubmitHandler = async(event)=>{
    event.preventDefault()


  }





  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded-2xl border border-gray-900 bg-gray-800 text-white text-sm shadow-xl shadow-gray-900'>
        <p className='text-2xl text-white font-semibold'>{state === 'Sign Up' ? "Create Account": "Login"}</p>
        <p>Please {state === 'Sign Up'? "sign up" : "log in"} to book appointment</p>

        {
          state === 'Sign Up' ? 
           <div className='w-full mt-4'>
          <p>Full Name</p>
          <input className='border bg-gray-300 outline-none border-white rounded w-full p-2 mt-1 text-black' type="text" onChange={(e)=>SetName(e.target.value)} value={name} required/>
        </div> : ""
        }
       

        <div className='w-full mt-2'>
          <p>Email</p>
          <input className='border bg-gray-300 outline-none border-white rounded w-full p-2 mt-1 text-black' type="email" onChange={(e)=>SetEmail(e.target.value)} value={email} required/>
        </div>

        <div className='w-full mt-2'>
          <p>Password</p>
          <input className='border bg-gray-300 outline-none border-white rounded w-full p-2 mt-1 text-black' type="password" onChange={(e)=>SetPassword(e.target.value)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base mt-2'>{state === 'Sign Up' ? "Create Account" : "Sign In"}</button>

        {
          state === 'Sign Up' ?
          <p className='mt-2'>Already have an account?   <span className='cursor-pointer text-primary underline' onClick={()=>setState('Sign In')}> Login here</span></p> :
          <p className='mt-2'>Create a new account?   <span className='cursor-pointer text-primary underline' onClick={()=>setState('Sign Up')}> Click here</span> </p>
        }

      </div>

    </form>
  )
}

export default Login