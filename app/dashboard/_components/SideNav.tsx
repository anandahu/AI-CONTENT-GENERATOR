"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function SideNav() {
    const MenuList=[
        {name:'Home',
        icon:Home,
        path:'/dashboard'},
        
        
        {name:'History',
        icon:FileClock,
        path:'/dashboard/history'},
        
        {name:'Settings',
        icon:Settings,
        path:'/dashboard/settings'},
        
        
        {name:'Billing',
        icon:WalletCards,
        path:'/dashboard/billing'},

]
const path=usePathname();
useEffect(() => {
    console.log(path)
},[])
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex items-center justify-center '>
        <img src={'/logo.svg'} alt="Logo" width={100}  height={100}/>
        </div>
        <hr className='mt-6 border'/>
        <div className='mt-3'>
            {MenuList.map((menu, index) => (
            <div
                className={`flex gap-2 mb-2 p-3 bg-white text-black
                    hover:bg-amber-700 hover:text-white rounded-lg 
                    cursor-pointer transition-colors
                    ${path == menu.path ? 'bg-amber-700 text-white' : ''}
                `}
            >
                <menu.icon />
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav