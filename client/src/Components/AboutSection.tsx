import React from 'react'

export default function AboutSection() {
  return (
    <div className="about mt-5 mb-5 flex w-full justify-center flex-row">
          <div className="img border-4 border-green border-dashed mr-5 h-96 w-96 border-circle"></div>

          <div className="details ml-5 flex justify-center flex-col w-96">
            <h1 className="text-3xl font3 text-white">INTRO</h1>
            <h1 className="text-white text-justify">
              FullStack Developer, I develope website with Stunning Designs,
              Seamless User Experience As a seasoned MERN technology enthusiast,
              I have mastered the art of weaving captivating designs with the
              power of MongoDB, Express.js, React, and Node.js. {"I'm"} Always
              looking to expand my skill set, {"I'm"} currently learning React
              Native, C++ and Data Structures & Algorithms, as well as
              Python/Machine Learning.
            </h1>
          </div>

        </div>
  )
}
