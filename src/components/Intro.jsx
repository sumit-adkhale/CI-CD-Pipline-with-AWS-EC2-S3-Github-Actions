import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


function Intro() {
  return (
    <div className="w-full mt-10 items-center md:flex justify-between px-5 md:px-10 lg:px-20 md:h-[60vh] ">
      <div className="md:w-1/2 text-left font-semibold mb-10">
      <div className=" sm:h-fit h-[32vh]">
      <h1 className="sm:text-5xl text-4xl">Hi, My name is Sumit and <br /> I am a Professional 
      </h1><span className=" sm:leading-none leading-10 text-xs">
        <TypeAnimation 
          sequence={[
            "Web developer",
            1000,
            "Front End Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "3em", display: "inline-block"}}
          repeat={Infinity}
        /></span>
        </div>
        <br/>
        <div className="mt-5">
        <Link to="/Resume" className="bg-cyan-500 text-white p-3 mr-5 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-yellow-500/40 hover:text-black hover:font-bold">Download Resume</Link>
        <a href="https://github.com/sumit-adkhale" className="bg-cyan-500 text-white p-3 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-yellow-500/40 hover:text-black hover:font-bold">Visit GitHub</a>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 relative">

      <img className=" w-[80%] h-[80%] rounded-full" src="/img_backside1.png" alt="" />
        <img className="w-[60%] h-[85%] z-4 top-0 left-10 absolute " src="/3d-img1.png" alt="" />
      </div>
    </div>
  );
}

export default Intro;
