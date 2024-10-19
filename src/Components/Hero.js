import React from 'react'
import pic from '../Components/pic1.png'
import Cutout from '../Components/Cutout.png'
import {desc} from '../Constants/Constants'
import {role} from '../Constants/Constants'
import { motion } from "framer-motion";

const containerr = (delay) =>({
  hidden:{x:100 ,opacity : 0 },
  visible:{
    x:0,
    opacity:1,
    transition:{duration: 0.5,delay: delay},
  },
});

const containerl = (delay) =>({
  hidden:{x:-100 ,opacity : 0 },
  visible:{
    x:0,
    opacity:1,
    transition:{duration: 0.5,delay: delay},
  },
});

function Hero() {
  return (
    <div id="hero" className='px-6 pt-24 lg:pt-32 flex flex-col lg:flex-row w-full h-auto lg:h-screen justify-center items-center bg-[#faf9ec]'>
      <div className='flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0'>
        <motion.img 
        variants={containerl(0.5)}
        initial='hidden'
        animate='visible'
        src={pic} alt='pic' className='hidden md:block object-contain max-h-[850px] lg:max-w-full' /> 
        <motion.img 
        variants={containerl(0.5)}
        initial='hidden'
        animate='visible'
        src={Cutout} alt='cutout' className='md:hidden object-contain max-w-xs lg:max-w-full' /> 
      </div>
      <div className='flex flex-col w-full lg:w-1/2 justify-center items-start text-center lg:text-left'>
        <motion.h1
        variants={containerr(0.3)}
        initial='hidden'
        animate='visible'
        className='text-4xl lg:text-6xl mb-4 lg:mb-6'>Welcome,</motion.h1>
        <motion.h2
        variants={containerr(0.4)}
        initial='hidden'
        animate='visible'
         className='text-3xl lg:text-5xl mb-4 lg:mb-6'>I'm Bhasil Muhammed</motion.h2>
        <motion.h2
        variants={containerr(0.5)}
        initial='hidden'
        animate='visible'
         className='text-3xl lg:text-4xl mb-4 lg:mb-6 text-[#894727]'>{role}</motion.h2>
        <motion.h3 
        variants={containerr(0.6)}
        initial='hidden'
        animate='visible'
        className='text-xl text-start lg:text-3xl'>
          {desc}
        </motion.h3>
      </div>
    </div>
  )
}

export default Hero





