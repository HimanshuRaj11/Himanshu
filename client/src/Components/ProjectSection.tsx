import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProjectCard } from './ProjectCard'
const img_src = '/blank-paper.jpg'
export default function ProjectSection() {
  const Projects = [
    {
      title: "NetFlix Clone",
      description: "This project is a modern web application replicating the core functionalities of Netflix. Built using React for the frontend, styled with Tailwind CSS.",
      link: "https://netflixclone.himanshurajyadav.in/",
      image: "/netflix.png",
      tags: ["React.js", "Tailwind CSS", "fake Api", "Firebase"],
      githubUrl: "https://github.com/HimanshuRaj11/NetflixClone/tree/master/",
      liveUrl: "https://netflixclone.himanshurajyadav.in/"
    },
    {
      title: "CROSS : Social Media App",
      description: "'Cross' is a dynamic social media web app built using Next.js, TypeScript, Tailwind CSS, and MongoDB. It offers a seamless and feature-rich platform with all essential social media functionalities, providing users with an engaging and modern experience.",
      link: "https://cross-qgi4.onrender.com/",
      image: "/crossLogo.png",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "MongoDb", "Socket.io"],
      githubUrl: "https://github.com/HimanshuRaj11/cross",
      liveUrl: "https://netflixclone.himanshurajyadav.in/"
    },
    {
      title: "Mahadev Studios || freelance Work",
      description: "Mahadev Studios is a renowned film production house known for producing high-quality documentaries, short films, ad films, web series, music videos, album songs, and more. we have established ourselves as storytelling experts, crafting impactful visual content that resonates with audiences.",
      link: "https://mahadevstudios.com/",
      image: "/mahadevStudios.png",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "MongoDb", "Socket.io", "shadcn ui"],
      githubUrl: "https://github.com/HimanshuRaj11/MahadevStudios",
      liveUrl: "https://mahadevstudios.com/"
    },
    {
      title: "FyBill || freelance Work",
      description: "A modern, full-stack billing and invoicing web application built to help businesses, freelancers, and entrepreneurs create professional invoices, manage customers, track payments, and monitor expenses – all from a sleek and intuitive dashboard.",
      link: "https://fybill.onrender.com/",
      image: "/fybill.png",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "MongoDb", "shadcn ui"],
      githubUrl: "https://github.com/HimanshuRaj11/FyBill",
      liveUrl: "https://fybill.onrender.com/"
    },
  ]
  return (
    <div id='project' className='project flex flex-col justify-center items-center'>
      <h1 className='text-5xl font2 text-white'>PROJECTS</h1>
      <div className='Projects  w-full flex flex-wrap justify-around items-center '>
        {
          Projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />
          })
        }

      </div>
    </div>
  )
}
