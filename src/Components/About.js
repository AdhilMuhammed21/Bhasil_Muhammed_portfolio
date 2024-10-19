import React from 'react'
import {abt} from '../Constants/Constants'

function About() {
  return (
    <div className='pt-24 px-4 md:px-12 flex flex-col justify-center items-start overflow-y-hidden  bg-[#faf9ec]'>
        <h1 className='text-start text-6xl pb-12 underline decoration-[#a45933] text-black'>About</h1>
        <h2 className='text-start text-md md:text-3xl pb-12 text-neutral-800'>{abt}</h2>
      
    </div>
  )
}

export default About
