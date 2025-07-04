"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UsageTrack from './UsageTrack'

function SideNav() {
    const MenuList = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'History', icon: FileClock, path: '/dashboard/history' },
        { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
        { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
    ]
    const path = usePathname();

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex items-center justify-center '>
                <img src={'/logo.svg'} alt="Logo" width={100} height={100} />
            </div>
            <hr className='mt-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu) => {
                    const isActive = path === menu.path;
                    return (
                        <div
                            key={menu.path}
                            className={`flex gap-2 mb-2 p-3 bg-white text-black
                                hover:bg-amber-700 hover:text-white rounded-lg 
                                cursor-pointer transition-colors
                                ${isActive ? 'bg-amber-700 text-white' : ''}
                            `}
                        >
                            <Link href={menu.path} className="flex items-center gap-2 w-full h-full">
                                <menu.icon />
                                <h2>{menu.name}</h2>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav