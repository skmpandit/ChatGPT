'use client'
import React from 'react'
import Image from 'next/image'
import ChatGPTLogo from '../public/chatgpt-icon.png'
import { signIn } from 'next-auth/react'


const Login = () => {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
      <Image src={ChatGPTLogo} width={300} height={300} alt='logo'/>
      <button onClick={() => signIn("google")} className='bg-white py-2 px-4 cursor-pointer uppercase font-semibold text-gray-800 rounded-md hover:bg-slate-950 hover:text-white animate-bounce'>Sign In</button>
    </div>
  )
}

export default Login
