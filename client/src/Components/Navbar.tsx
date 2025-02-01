"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <header>
      {/* small Screen Navbar */}
      <nav className=" md:hidden small fixed z-50 h-auto w-full overflow-hidden flex-col  backdrop-blur-md flex bg-transparent items-center bg-slate-700 ">
        <div className="h-20 w-full flex items-center justify-center">
          <div className="hamburgur fixed top-5 flex items-center justify-center right-4 z-auto size-10">
            {visible ? (
              <ImCross className="text-green text-2xl cursor-pointer" onClick={() => setVisible(false)} />
            ) : (
              <RiMenu3Fill className=" text-green text-4xl cursor-pointer" onClick={() => setVisible(true)} />
            )}
          </div>

          <Link href={"#home"} className="logo font3 text-green text-4xl m-4">
            Himanshu.
          </Link>
        </div>
        {visible ? (
          <div className="h-screen">
            {/* <div className="search p-1 m-4">
              <input
                type="search"
                name="search"
                className="search font2 w-60 p-1 text-center"
                placeholder="Search..."
              />
            </div> */}
            <div className="links">
              <div className="text-white menu flex ubuntu-regular items-center flex-col ">
                <Link href={"#about"} className="menu-link w-60 m-5 text-center">
                  About
                </Link>
                <Link href={"#skill"} className="menu-link w-60 m-5 text-center">
                  Skills
                </Link>
                <Link href={"#project"} className="menu-link w-60 m-5 text-center">
                  Project
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>

      {/* Lage screen Navbar */}
      <nav className="Large hidden md:block z-50">
        <div className="w-full h-20 flex-row  z-50 backdrop-blur-md fixed bg-transparent flex justify-around items-center">
          <Link href={"#home"} className="logo font3 text-green justify-center items-center text-4xl">
            Himanshu.
          </Link>
          <div className="text-white menu flex ubuntu-regular items-center flex-row ">
            <Link href={"#about"} className="menu-link ml-2">
              About
            </Link>
            <Link href={"#skill"} className="menu-link ml-2">
              Skills
            </Link>
            <Link href={"#project"} className="menu-link ml-2">
              Project
            </Link>
          </div>
          {/* <div className="search">
            <input
              type="search"
              name="search"
              className="search font2 p-2"
              placeholder="Search..."
            />
          </div> */}
        </div>
      </nav>
    </header>
  );
}
