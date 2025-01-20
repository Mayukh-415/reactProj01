import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const submitHandler = (e) =>{
  e.preventDefault()
  console.log(`email is ${email} and password is ${password}`)

  setEmail("")
  setPassword("")
}
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)}}
            className='flex flex-col items-center justify-center'>
              
                <input required
                value ={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                className='text-white outline-none bg-transparent border-2 border-emerald-600 p rounded-full py-4 px- text-xl  placeholder:text-grey-300 mt-3 p-2' type = "email" placeholder='Enter Your Email' />

                <input required 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                className='text-white outline-none bg-transparent border-2 border-emerald-600 p rounded-full py-4 px- text-xl  placeholder:text-grey-300 mt-3 p-2' type="password" placeholder='Enter Password' />

                <button className='text-white outline-none bg-emerald-600 border-2 border-emerald-600 p rounded-full py-4 px- text-xl  placeholder:text-white mt-7 p-2'>Log in</button>

            </form>
        </div>

    </div>
  )
}

export default Login
