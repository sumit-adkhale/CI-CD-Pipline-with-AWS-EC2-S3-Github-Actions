import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";

function CardGetInTouch({icon,heading,details,link}) {
  return (
    <div className="w-[60%] ml-[20%] flex gap-1 flex-col items-center bg-slate-300 dark:shadow-white dark:shadow-md shadow-md m-10 dark:bg-slate-600 p-5">
      <span className="text-5xl"> {icon}</span>
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <h1 className="md:text-lg text-md dark:text-gray-400 text-slate-600">{details}</h1>
      <div className="flex justify-between w-36 text-2xl p-2 items-center">
        <a href={link} >
          write me 
        </a>
        <FaArrowRight />
      </div>
    </div>
  );
}

export default CardGetInTouch;
