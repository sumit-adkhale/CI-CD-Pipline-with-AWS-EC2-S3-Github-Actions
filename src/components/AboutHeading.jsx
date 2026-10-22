import React from 'react'

function AboutHeading() {
  return (
    <div className=" md:mt-0 lg:mt-20 w-full h-[12vh] sm:h-[18vh] md:h-[23vh] relative">
          <img
            src="/about_background.png"
            className="w-[60%] h-full absolute top-[0%] left-[20%] "
            alt=""
          />
          <h1 className="absolute text-4xl sm:text-6xl md:text-7xl font-semibold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            About
          </h1>
          
        </div>
  )
}

export default AboutHeading