import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Projectcard } from './ProjectCard'
const img_src = '/blank-paper.jpg'
export default function ProjectSection() {
  const Projects = [
    {
      title: "NetFlix Clone",
      description: "This project is a modern web application replicating the core functionalities of Netflix. Built using React for the frontend, styled with Tailwind CSS.",
      link: "https://netflixclone.himanshurajyadav.in/",
      image: "/netflix.png"
    },
    {
      title: "CROSS : Social Media App",
      description: "'Cross' is a dynamic social media web app built using Next.js, TypeScript, Tailwind CSS, and MongoDB. It offers a seamless and feature-rich platform with all essential social media functionalities, providing users with an engaging and modern experience.",
      link: "https://cross.himanshurajyadav.in/",
      image: "/crossLogo.png"
    },
  ]
  return (
    <div className='project flex flex-col justify-center items-center'>
      <h1 className='text-5xl font2 text-white'>PROJECTS</h1>
      <div className='Projects  w-full flex flex-wrap justify-around items-center '>

        {
          Projects.map((project, index) => {
            return <Projectcard key={index} project={project} />
          })
        }

      </div>
    </div>
  )
}
