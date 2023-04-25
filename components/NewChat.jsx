import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

const NewChat = () => {
  return (
    <div className='border-gray-700 border chatRow justify-start'>
      <PlusIcon className='h-4 w-4 text-white'/>
      <p>New Chat</p>
    </div>
  )
}

export default NewChat
