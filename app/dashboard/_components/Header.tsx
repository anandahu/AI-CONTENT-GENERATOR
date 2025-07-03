import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between p-5  border-b-2 bg-white'>
        
        <div className='flex gap-2 items-center
          p-2 border rounded-md max-w-lg bg-white'>
            <Search />
            <input type='text' placeholder='Search...' 
            className='outline-none'/>
        </div> 
      
      <div>
          <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>
              Subscribe......
          </h2>
      </div>
    </div>
  )
}

export default Header