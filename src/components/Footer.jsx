import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';
function Footer() {
  return (
    <>

      <div className="relative w-full min-h-[100px] py-5 px-11 pb-1 z-0 bg-[#00adf2] mt-20">
        <ul className="flex justify-center items-center px-3">
        <li>
          <a href="https://www.facebook.com/sumit.adkhale/" className="text-3xl mx-3 mt-3 inline-block text-white hover:mt-0">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://x.com/sumit_adkhale" className="text-3xl mx-3 mt-3 inline-block text-white hover:mt-0">
            <AiFillTwitterCircle />
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/sumit-adkhale/" className="text-3xl mx-3 mt-3 inline-block text-white hover:mt-0">
            <IoLogoLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sumit_a_a_/" className="text-3xl mx-3 mt-3 inline-block text-white hover:mt-0">
            <FaInstagram />
          </a>
        </li>
        </ul>
        <ul className="flex justify-center items-center sm:px-3 px-0">
            <li><HashLink to="#home"  className="text-md sm:text-xl mx-1 sm:mx-3 mt-3 inline-block text-white/80 hover:text-white/100 hover:font-semibold">Home</HashLink></li>
            <li><HashLink to="#skills"  className="text-md sm:text-xl mx-1 sm:mx-3 mt-3 inline-block text-white/80 hover:text-white/100 hover:font-semibold">Skills</HashLink></li>
            <li><HashLink to="#projects"  className="text-md sm:text-xl mx-1 sm:mx-3 mt-3 inline-block text-white/80 hover:text-white/100 hover:font-semibold">Projects</HashLink></li>
            <li><HashLink to="#about"  className="text-md sm:text-xl mx-1 sm:mx-3 mt-3 inline-block text-white/80 hover:text-white/100 hover:font-semibold">About</HashLink></li>
            <li><HashLink  to="#contact" className="text-md sm:text-xl mx-1 sm:mx-3 mt-3 inline-block text-white/80 hover:text-white/100 hover:font-semibold">Contact</HashLink></li>
        </ul>
        <p className="my-2 text-black">Created By Sumit A. Adkhale</p>

<div className="w-full bg-slate-500">
        <div className="w-[100%] h-[130px] bg-[length:200%_130px] animate-[wave_3s_linear_infinite] opacity-100 z-50 bg-no-repeat bg-[url('/wave1.png')] absolute top-[-125px] left-0 "></div>
        <div className="w-[100%] h-[130px] bg-[length:200%_130px] animate-[rewave_3s_linear_infinite] opacity-90 z-40 bg-no-repeat bg-[url('/wave1.png')] absolute top-[-120px] left-0 "></div>
        <div className="w-[100%] h-[130px] bg-[length:200%_130px] animate-[wave_4s_linear_infinite] opacity-80 z-30 bg-no-repeat bg-[url('/wave1.png')] absolute top-[-115px] left-0 "></div>
        <div className="w-[100%] h-[130px] bg-[length:200%_130px] animate-[rewave_4s_linear_infinite] opacity-80 z-20 bg-no-repeat bg-[url('/wave1.png')] absolute top-[-125px] left-0 "></div>
      </div>
      </div>
    </>
  );
}

export default Footer;
