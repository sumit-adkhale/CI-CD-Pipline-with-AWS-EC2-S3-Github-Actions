import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Skills() {
  const skillsData = [
    { skillName: "HTML", img: "/html.png", top: 10, left: 10 },
    { skillName: "CSS", img: "/css.png", top: 37, left: 64 },
    {
      skillName: "Javascript",
      img: "/javascript.png",
      top: -2,
      left: 55,
    },
    { skillName: "React", img: "/react.png", top: 10, left: 80 },
    {
      skillName: "Tailwind",
      img: "/tailwind.png",
      top: 50,
      left: 80,
    },
    { skillName: "Redux", img: "/Redux.png", top: 50, left: 10 },
    { skillName: "GitHub", img: "/github.png", top: 53, left: 30 },
    { skillName: "GSAP", img: "/gsap.svg", top: 40, left: 45 },
    { skillName: "MySQL", img: "/mysql.png", top: 12, left: 35 },
  ];

  return (
    <>
      <div className="w-full h-[100vh] mt-20 md:mb-10 md:mt-10" id="skills">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="absolute bottom-20 sm:bottom-24 md:bottom-28 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        <span class="bg-clip-text text-5xl sm:text-6xl md:text-7xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Skills</span>
        <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
    </h1>
        <div className="skills-container w-full h-full flex p-20 flex-shrink-0 opacity-1 relative">
          {skillsData.map((s, index) => {
            return (
              <div
                className={`${s.skillName} w-[17%] h-[40%] absolute flex flex-col justify-center items-center`}
                style={{ top: `${s.top}%`, left: `${s.left}%` }}
              >
                <img className="md:w-[90%] md:h-[80%]" src={s.img} alt="" />
                <h1 className="font-bold text-2xl">{s.skillName}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
