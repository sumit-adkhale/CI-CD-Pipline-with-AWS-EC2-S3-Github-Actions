import React from 'react'
import CardGetInTouch from './CardGetInTouch'
import { IoIosMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";  


function LeftGetInTouch() {
    const talkToME=[
        {icon:<IoIosMail/>,heading:"Email",details:"sumit.adkhale5@gmail.com",link:"https://mail.google.com/mail/?view=cm&fs=1&to=sumit.adkhale5@gmail.com"},
        {icon:<FaWhatsapp/>,heading:"Whats App",details:"+91 7303815099",link:"https://api.whatsapp.com/send/?phone=%2B917303815099&text&type=phone_number&app_absent=0"},
        {icon:<FaLinkedin />,heading:"Message",details:"linkedin.com/in/sumit-adkhale/",link:"https://www.linkedin.com/in/sumit-adkhale/"},
    ]
  return (
    <div className='md:w-1/2 w-full md:m-0 '>
            <h1 className='text-5xl font-semibold'>Talk to me</h1>
            {talkToME.map((i,index)=>{
                return <CardGetInTouch icon={i.icon} heading
                ={i.heading} details={i.details} link={i.link}/>
            })}
            
        </div>
  )
}

export default LeftGetInTouch