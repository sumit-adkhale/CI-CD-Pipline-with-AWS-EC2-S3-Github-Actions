import React from 'react'
import InputBox from './InputBox'
import { RiSendPlaneFill } from "react-icons/ri";


function RightGetInTouch() {
  
  return (
    <div className='md:w-1/2 w-full mx-auto md:m-0'>
            <h1 className='text-5xl font-semibold w-[70%] md:mt-0 mt-20 md:mx-0 mx-auto lg:w-[80%]'>Contact Me</h1>
            <form onSubmit={()=>alert('submited Successfully')} action="">
            <InputBox Boxname={"Name"}/>
            <InputBox Boxname={"Email"}/>
            <InputBox Boxname={"Content"} height="h-40"/>
            <button type='submit' className='bg-sky-800 px-6 py-3 rounded-xl flex mx-auto'>Send Message <RiSendPlaneFill className='ml-2 text-xl'/>
            </button>
            </form>
    </div>
  )
}

export default RightGetInTouch