import React from "react";

export default function AboutSection() {
  return (
    <div id="about" className="about mt-5 mb-5 flex items-center justify-center flex-col sm:flex-row">
      <div className="img border-4 border-green border-dashed mr-5 size-72 sm:size-96 border-circle"></div>

      <div className="details mt-5 ml-5 flex justify-center flex-col w-72 sm:w-96">
        <h1 className="text-3xl font3 text-white">INTRO</h1>
        <h1 className="text-white text-justify">
          Hi, I’m Himanshu Raj, a dedicated full-stack developer with a deep
          interest in software development and machine learning. Currently
          pursuing a B.Tech from Chandigarh Group of Colleges, I have honed my
          skills through various projects that blend my expertise in web
          development and data science. Whether it's building dynamic web
          applications or developing machine learning models, I am driven by the
          challenge of solving complex problems with innovative solutions.
        </h1>
      </div>
    </div>
  );
}
