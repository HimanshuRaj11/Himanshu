import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const img_src = '/imageGirl1.jpg'
export default function BlogSection() {
  return (
    <div className='blog flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-white font2'>BLOGS</h1>
      <div className='blogs w-full flex flex-wrap justify-around items-center'>
        <Link href={'/blog'}>
        <div className="card m-3 border-2 rounded-2xl border-green overflow-hidden">
          <div className="img h-60 w-72">
            <Image src={img_src} height={1000} width={800}  alt='' />
          </div>
          <div className="brif"></div>
        </div>
        </Link>
      </div>
    </div>
  )
}
