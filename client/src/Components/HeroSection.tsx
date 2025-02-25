import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCloudDownloadAlt,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function HeroSection() {
  return (

    <BackgroundBeamsWithCollision>
      <div className="w-full" id={'home'}>
        <div className="flex sm:flex-row flex-col w-full justify-center sm:justify-around items-center">
          {/* --- */}
          <div className="sm:sm_part part flex justify-center flex-col">
            <span className="text-white">
              Full-Stack Developer | Software Developer
            </span>
            <h1 className="text-white text-3xl sm:text-5xl new-amsterdam-regular">
              Hello {"I'm"}{" "}
            </h1>
            <h1 className="text-green text-2xl sm:text-3xl lg:text-5xl ubuntu-regular">
              Himanshu raj Yadav
            </h1>
            <h3 className=" w-72 sm:w-96 h-auto text-white text-lg">
              A passionate developer with a strong foundation in both front-end
              and back-end technologies. Experienced in building scalable web
              applications and leveraging machine learning techniques for
              data-driven solutions.
            </h3>
            <div className="social flex flex-row items-center mt-6">
              <Link
                href="/himanshu.pdf"
                target='_blank'
                // download={"himanshu-cv.pdf"}
                className="cv cursor-pointer flex pl-2 text-green justify-between w-36"
              >

                Resume <FaCloudDownloadAlt className="icon" />
              </Link>

              <Link
                href={"https://github.com/HimanshuRaj11"}
                target="_blank"
                className="s-icon"
              >
                <FaGithub className="icon" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/himanshu-raj-yadav-37b185252"}
                target="_blank"
                className="s-icon"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* --- */}

          <div className="flex justify-center items-center">
            <div className="img border-4 border-green overflow-hidden border-dashed mr-5 size-72 lg:size-96 relative border-circle">
              <Image src={'/profile.jpg'} alt="Profile Pic" width={700} height={700} className="absolute size-70 " />
            </div>
          </div>
        </div>
        {/* ---- */}
        <div className="w-full h-auto flex flex-col sm:flex-row justify-around items-center ubuntu-regular">
          <div className="flex flex-row justify-around w-full">
            <div className="w-36 h-24 flex flex-row text-white items-center justify-between">
              <h1 className="text-4xl">3+</h1>{" "}
              <h4 className="ml-2">Year of Exprience</h4>
            </div>
            <div className="w-36 h-24 flex flex-row text-white items-center justify-between">
              <h1 className="text-4xl">10+</h1>{" "}
              <h4 className="ml-2">Project completed</h4>
            </div>
          </div>
          <div className="flex flex-row justify-around w-full">
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
      </div>
    </BackgroundBeamsWithCollision>
  );
}
