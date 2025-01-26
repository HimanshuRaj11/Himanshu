"use client"
import React from 'react'
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill } from 'react-icons/ri'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight"
export default function SkillSection() {
  return (

    <div className="skill mt-5 mb-5 pl-12 pr-12 flex flex-col justify-center items-center ">

      <div className="text-5xl text-white font2">MY SKILLS</div>
      <div className="flex justify-around flex-wrap">
        <div className="cir border-circle size-20 sm:size-32 border-2 m-4 sm:m-6 border-green flex items-center justify-center">
          <FaReact className="skill-icon text-6xl sm:text-8xl text-blue-500" />
        </div>
        <div className="cir border-circle size-20 sm:size-32 border-2 m-4 sm:m-6 border-green flex items-center justify-center">
          <SiMongodb className="skill-icon text-6xl sm:text-8xl text-green-800" />
        </div>
        <div className="cir border-circle size-20 sm:size-32 border-2 m-4 sm:m-6 border-green flex items-center justify-center">
          <FaNodeJs className="skill-icon text-6xl sm:text-8xl text-green" />
        </div>
        <div className="cir border-circle size-20 sm:size-32 border-2 m-4 sm:m-6 border-green flex items-center justify-center">
          <FaPython className="skill-icon text-6xl sm:text-8xl text-black" />
        </div>
        <div className="cir border-circle size-20 sm:size-32 border-2 m-4 sm:m-6 border-green flex items-center justify-center">
          <IoLogoJavascript className="skill-icon text-6xl sm:text-8xl text-yellow-500" />
        </div>
        <div className="cir border-circle size-20 sm:size-32 border-2 m-4 sm:m-6 border-green flex items-center justify-center">
          <SiTailwindcss className="skill-icon text-6xl sm:text-8xl text-blue-600" />
        </div>
        <div className="cir border-circle size-20 sm:size-32 border-2 m-4 sm:m-6 border-green flex items-center justify-center">
          <RiNextjsFill className="skill-icon text-6xl sm:text-8xl text-black" />
        </div>
      </div>
    </div>
  )
}
