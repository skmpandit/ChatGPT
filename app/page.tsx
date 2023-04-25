import React from 'react'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const page = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center h-screen px-2'>
      <h1 className='text-4xl md:text-5xl font-bold mb-20'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <div>
            <div className='flex flex-col items-center justify-center mb-5'>
                <SunIcon className='h-7 w-7 text-white'/>
                <h2 className='text-[18px]'>Examples</h2>
            </div>
            <div className='space-y-2'>
              <p className='infoText'>"Explain quantum computing in<br/>simple terms" →</p>
              <p className='infoText'>"Got any creative ideas for a 10<br/>year old’s birthday?" →</p>
              <p className='infoText'>"How do I make an HTTP request<br/>in Javascript?" →</p>
            </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5' >
            <BoltIcon className='h-7 w-7 text-white'/>
            <h2 className='text-[18px]'>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>Remembers what user said<br/>earlier in the conversation</p>
            <p className='infoText'>Allows user to provide follow-up<br/>corrections</p>
            <p className='infoText'>Trained to decline inappropriate<br/>requests</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className='h-7 w-7 text-white'/>
            <h2 className='text-[18px]'>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occasionally generate<br/>incorrect information</p>
            <p className="infoText">May occasionally produce<br/>harmful instructions or biased<br/>content</p>
            <p className="infoText">Limited knowledge of world and<br/>events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
