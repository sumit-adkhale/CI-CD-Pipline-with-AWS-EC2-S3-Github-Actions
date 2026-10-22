import React from 'react'
import CardGetInTouch from './CardGetInTouch'
import LeftGetInTouch from './LeftGetInTouch'
import RightGetInTouch from './RightGetInTouch'

function GetInTouch() {
  return (
    <>
    <div className='w-full mt-24 md:flex-row flex flex-col' id="contact">
        <LeftGetInTouch/>
        <RightGetInTouch/>
    </div>
    </>
  )
}

export default GetInTouch