import React from "react";
import AboutHeading from "./AboutHeading";

function About() {
  return (
    <div className="w-full flex flex-col items-center gap-4" id="about">
      <AboutHeading/>
      <img
        src="/myphoto.jpg"
        className="w-[20%] border-4 mx-auto rounded-full"
        alt=""
      />
      <h5 className="uppercase font-semibold text-xl sm:text-5xl dark:text-yellow-400 text-blue-600 sm:mt-5">Sumit A. Adkhale</h5>
      <p className="w-[70%] text-xs sm:text-xl font-medium">
        Hello! I'm Sumit, a passionate and dedicated web developer with a strong
        background in JavaScript. My journey into the world of programming began
        with a fascination for creating interactive and dynamic web
        applications. Over the years, I have honed my skills in front-end
        development, mastering HTML, CSS, and JavaScript, and exploring
        frameworks like React and Next.js. I thrive on solving complex problems
        and am continuously learning to keep up with the latest industry trends.
        When I'm not coding, you can find me exploring new technologies, or enjoying outdoor adventures.
        I'm excited to bring my creativity and technical expertise to your next
        project!
      </p>
    </div>
  );
}

export default About;
