import React from 'react'
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill } from 'react-icons/ri'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'

export default function SkillSection() {
  return (
    <div className="skill mt-5 mb-5 pl-12 pr-12 flex flex-col justify-center items-center ">
    <div className="text-5xl text-white font2">MY SKILLS</div>
    <div className="flex justify-around flex-wrap">
      <div className="cir border-circle w-36 h-36 border-2 m-6 border-green flex items-center justify-center">
      <FaReact className="skill-icon text-9xl text-blue-500" />
      </div>
      <div className="cir border-circle w-36 h-36 border-2 m-6 border-green flex items-center justify-center">
      <SiMongodb className="skill-icon text-9xl text-green-800" />
      </div>
      <div className="cir border-circle w-36 h-36 border-2 m-6 border-green flex items-center justify-center">
      <FaNodeJs className="skill-icon text-9xl text-green" />
      </div>
      <div className="cir border-circle w-36 h-36 border-2 m-6 border-green flex items-center justify-center">
      <FaPython  className="skill-icon text-9xl text-black" />
      </div>
      <div className="cir border-circle w-36 h-36 border-2 m-6 border-green flex items-center justify-center">
      <IoLogoJavascript className="skill-icon text-9xl text-yellow-500" />
      </div>
      <div className="cir border-circle w-36 h-36 border-2 m-6 border-green flex items-center justify-center">
      <SiTailwindcss className="skill-icon text-9xl text-blue-600" />
      </div>
      <div className="cir border-circle w-36 h-36 border-2 m-6 border-green flex items-center justify-center">
      <RiNextjsFill className="skill-icon text-9xl text-black" />
      </div>
    </div>
  </div>
  )
}
