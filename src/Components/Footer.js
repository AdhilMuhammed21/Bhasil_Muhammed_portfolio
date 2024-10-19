import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

function Footer() {
  return (
    <div className='py-6 w-full flex flex-col items-center justify-center bg-[#e4bfac]  gap-6'>
      <div className='pt-6 flex flex-row gap-6 text-2xl md:gap-24 md:text-5xl pb-6'>
        <FaInstagram />
        <FaFacebook />
        <MdMarkEmailUnread />
      </div>
      <p className='text-sm'>Website By Crown</p>
    </div>
  )
}

export default Footer
