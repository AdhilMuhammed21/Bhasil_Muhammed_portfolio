import React from 'react'

function Nav() {
  return (
    <div className='w-full flex justify-between item-center pt-8 pb-3 h-24 fixed bg-[#faf9ec]'>
    <div className='mx-4 text-xl flex lg:w-1/3 font-bold'>
        <h2>Bhasil Muhammed</h2>
    </div>
    <div className='lg:flex mx-12  lg:w-2/3 justify-center items-center text-xl font-light gap-16'>
        <p>Home</p>
        <p>About</p>
        <p>MileStone</p>
        <p>Contact</p>
        

    </div>

      
    </div>
  )
}

export default Nav
