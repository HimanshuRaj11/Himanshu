import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <div className="h-auto mb-5 mt-16 ">
    <div className=" flex sm:flex-row md:flex-row flex-col justify-center items-center">
      {/* --- */}
      <div className="part flex justify-center flex-col">
        <span className="text-white">Software Developer</span>
        <h1 className="text-white text-5xl new-amsterdam-regular">
          Hello {"I'm"}{" "}
        </h1>
        <h1 className="text-green text-5xl ubuntu-regular">
          Himanshu Yadav
        </h1>
        <h3 className="w-96 h-auto text-white text-lg">
          I excel at crafting slegant digital experiances and I am
          proficient in various programing langiages and technologies.
        </h3>
        <div className="social flex flex-row items-center mt-6">
          <span className="cv flex text-green justify-between w-36">
            {" "}
            Download CV <FaCloudDownloadAlt className="icon" />
          </span>
          <Link href={"https://github.com/HimanshuRaj11"} target="_blank" className="s-icon">
            <FaGithub className="icon" />
          </Link>
          <Link href={"https://www.linkedin.com/in/himanshu-raj-yadav-37b185252"} target="_blank" className="s-icon">
            <FaLinkedin className="icon" />
          </Link>
          <Link href={"https://www.instagram.com/raaz_himanshu_yadav/"} target="_blank" className="s-icon">
            <FaInstagramSquare className="icon" />
          </Link>
        </div>
      </div>
      {/* --- */}
      <div className="part flex items-center">
        <div className="img border-4 border-green border-dashed h-96 w-96 border-circle"></div>
      </div>
    </div>
    {/* ---- */}
    <div className="w-full h-24 flex flex-row justify-around items-center ubuntu-regular">
      <div className="w-36 h-24 flex flex-row text-white items-center justify-between">
        <h1 className="text-4xl">3+</h1>{" "}
        <h4 className="ml-2">Year of Exprience</h4>
      </div>
      <div className="w-36 h-24 flex flex-row text-white items-center justify-between">
        <h1 className="text-4xl">10+</h1>{" "}
        <h4 className="ml-2">Project completed</h4>
      </div>
      <div className="w-36 h-24 flex flex-row text-white items-center justify-between">
        <h1 className="text-4xl">8+</h1>{" "}
        <h4 className="ml-2">Technologies mastered</h4>
      </div>
      <div className="w-36 h-24 flex flex-row text-white items-center justify-between">
        <h1 className="text-4xl">100+</h1>{" "}
        <h4 className="ml-2">code commits</h4>
      </div>
    </div>
  </div>
  )
}
