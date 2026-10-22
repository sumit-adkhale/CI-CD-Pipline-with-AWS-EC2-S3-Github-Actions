import React from 'react'

function ProjectsHeading() {
  return (
    <div className="md:mt-0 lg:mt-20 w-full h-[30vh] sm:h-[40vh] md:h-[50vh] relative">
          <img
            src="/project_background.png"
            className="w-[60%] h-full absolute top-[0%] left-[20%] "
            alt=""
          />
          <h1 className="absolute text-4xl sm:text-6xl md:text-7xl font-semibold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            Projects
          </h1>
        </div>
  )
}

export default ProjectsHeading