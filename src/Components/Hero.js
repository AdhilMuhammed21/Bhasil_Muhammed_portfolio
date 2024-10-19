import React from 'react'
import pic from '../Components/pic.png'
import Cutout from '../Components/Cutout.png'

function Hero() {
  return (
    <div className='mx-4 pt-20 lg:pt-32 flex flex-col lg:flex-row w-full h-auto lg:h-screen justify-center items-center bg-[#faf9ec]'>
      <div className='flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0'>
        <img src={pic} alt='pic' className='hidden md:object-contain max-w-xs lg:max-w-full' /> 
        <img src={Cutout} alt='pic' className=' md:hidden object-contain max-w-xs lg:max-w-full' /> 
        
      </div>
      <div className='flex flex-col w-full lg:w-1/2 justify-center items-start text-center lg:text-left'>
        <h1 className='text-4xl lg:text-6xl mb-4 lg:mb-6'>Welcome,</h1>
        <h2 className='text-3xl lg:text-5xl mb-4 lg:mb-6'>I'm Bhasil Muhammed</h2>
        <h3 className='text-xl lg:text-3xl px-4 lg:px-0'>
          Ex-UPSC aspirant turned entrepreneur, I built Civils360 to empower future civil servants. Passionate about learning and exploration, this site is where those journeys meet!
        </h3>
      </div>
    </div>
  )
}

export default Hero
