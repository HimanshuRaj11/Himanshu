import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const img_src = '/blank-paper.jpg'
export default function ProjectSection() {
  return (
    <div className='project flex flex-col justify-center items-center'>
      <h1 className='text-5xl font2 text-white'>PROJECTS</h1>
      <div className='Projects  w-full flex flex-wrap justify-around items-center'>

        <Link href={'https://netflixclone.himanshurajyadav.in/'} target='_blank'>
          <div className="card m-1 border-2 rounded-2xl border-green overflow-hidden bg-white">
            <div className="img w-72">
              <Image className='object-fill' src={'/netflix.png'} width={3048} height={2024} alt='Netflix Clone' />
            </div>
            <div className="brif text-blacks p-2">
              <h1>Netflix Clone</h1>
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}
