'use client'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'
import FallbackImag from '../public/avatar.png'


const Sidebar = () => {

  const { data: session } = useSession();

  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className="flex-1">
        <div>
            {/* NewChat */}
            <NewChat/>
            <div>
                {/* ModelSelection */}
            </div>
            {/* ChatList */}
        </div>
      </div>
      {session && (
        <div className='flex text-center'>
          <img className='h-10 w-10 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50' src={session.user?.image || FallbackImag} alt='logo'/>
          <button>Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Sidebar
