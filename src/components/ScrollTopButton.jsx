import React from 'react'
import { FaHandPointUp } from "react-icons/fa";


function ScrollTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

  return (
    <button onClick={scrollToTop} className='fixed bottom-6 right-6 dark:border-white border-black text-2xl  p-3 hover:p-4 hover:transition-all transition-all border-2 rounded-full'><FaHandPointUp />
</button>
  )
}

export default ScrollTopButton