"use client";
import AboutSection from "@/Components/AboutSection";
import BlogSection from "@/Components/BlogSection";
import HeroSection from "@/Components/HeroSection";
import HorizontalLine from "@/Components/HorizontalLine";
import ProjectSection from "@/Components/ProjectSection";
import SkillSection from "@/Components/skillSection";

export default function Home() {
  return (
    <main className="h-auto relative bg-dark w-full flex-col flex items-center justify-center">
      {/* Hero section */}
      <div className="md:mt-16 w-full mt-[5rem]">
        <HeroSection />
        <div className='w-full border-green border border-dashed'></div>
      </div>
      <div className="h-auto relative flex flex-col justify-center items-center pb-20 ">

        {/* About Section  */}
        <AboutSection />

        <HorizontalLine />
        {/* Skill Section */}
        <SkillSection />

        {/* Newest Blogs */}
        {/* <HorizontalLine /> */}
        {/* <BlogSection /> */}

        <HorizontalLine />
        {/* Newest Project */}
        <ProjectSection />
      </div>

    </main>
  );
}
