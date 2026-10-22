import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Menu({direction="flex"}) {
  return (
    <div className={` gap-10 items-center ${direction} w-fit mx-auto`}>
          <HashLink to="#skills" className='text-xl  p-2 dark:hover:text-sky-300 relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:w-0 after:bg-red-600 after:dark:bg-[#fff] hover:after:w-[100%] hover:after:left-0 after:transition-w-ease after:duration-500 duration-500 transition-w-ease'>Skills</HashLink>
          <HashLink to="#projects" className='text-xl  p-2 dark:hover:text-sky-300 relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:w-0 after:bg-red-600  after:dark:bg-[#fff] hover:after:w-[100%] hover:after:left-0 after:transition-w-ease after:duration-500 duration-500 transition-w-ease'>Projects</HashLink>
          <HashLink to="#about" className='text-xl  p-2 dark:hover:text-sky-300 mb-5 lg:mb-0 relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:w-0 after:bg-red-600 after:dark:bg-[#fff] hover:after:w-[100%] hover:after:left-0 after:transition-w-ease after:duration-500 duration-500 transition-w-ease'>About</HashLink>
          <HashLink to="#contact" className='bg-sky-300 p-3 text-black font-semibold rounded hover:bg-sky-500' href='#'>Let's Connect</HashLink>
        </div>
  )
}

export default Menu