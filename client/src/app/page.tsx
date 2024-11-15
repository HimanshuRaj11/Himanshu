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
      <div className="h-auto mt-16 sm:mt-32 relative flex flex-col justify-center items-center pb-20 ">
        {/* Hero section */}
        <HeroSection />

        <HorizontalLine />
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
