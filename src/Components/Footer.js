import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { motion } from "framer-motion"

function Footer() {
  return (
    <motion.div
    whileInView={{opacity : 1 , y:0}}
    initial={{opacity:0 , y:100}}
    transition={{duration : 0.5,delay:0.3}}
     id="contact" className='py-6 w-full flex flex-col items-center justify-center bg-[#c8815d] gap-6'>
      <div className='pt-6 flex flex-row gap-6 text-2xl md:gap-24 md:text-5xl pb-6'>
        
        <a href="https://www.instagram.com/tryst_with_bhasi/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
       
        <a href="https://www.facebook.com/basil.muhammed.9461" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
       
        <a href="mailto:bhasilek@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdMarkEmailUnread />
        </a>
      </div>

      <p className='text-sm'>Website By Crown</p>
      
    </motion.div>
  )
}

export default Footer
