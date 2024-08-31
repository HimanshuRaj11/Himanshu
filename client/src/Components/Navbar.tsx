import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-20 flex-row backdrop-blur-md fixed bg-transparent flex justify-around items-center'>
        <Link href={'/'} className="logo font3 text-green text-4xl">Himanshu.</Link>
        <div className="text-white menu flex ubuntu-regular items-center flex-row ">
            <Link href={'/'} className='menu-link'>Portfolio</Link>
            <Link href={'/'} className='menu-link'>Blog</Link>
            <Link href={'/'} className='menu-link'>Service</Link>
            <Link href={'/'} className='menu-link'>Project</Link>
        </div>
      <div className="search">
        <input type="search" name="search" className='search font2' placeholder='Search...' />
      </div>
    </div>
  )
}
