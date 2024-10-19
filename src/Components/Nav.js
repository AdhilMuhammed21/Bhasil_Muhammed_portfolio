import React, { useState } from 'react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex justify-between items-center pt-8 pb-3 h-24 fixed bg-[#faf9ec] z-10'>
      <div className='mx-4 text-xl flex lg:w-1/3 font-bold'>
        <h2>Bhasil Muhammed</h2>
      </div>
      <div className='hidden md:flex mx-12 lg:w-2/3 justify-center items-center text-xl font-light gap-16'>
        <p onClick={() => handleScrollTo('hero')} className="cursor-pointer">Home</p>
        <p onClick={() => handleScrollTo('about')} className="cursor-pointer">About</p>
        <p onClick={() => handleScrollTo('roadmap')} className="cursor-pointer">MileStone</p>
        <p onClick={() => handleScrollTo('contact')} className="cursor-pointer">Contact</p>
      </div>
      
      <div className='md:hidden mx-4'>
        <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
          {isMenuOpen ? '✖️' : '☰'} 
        </button>
      </div>
      
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-[#a45933] shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        
        <div className='flex justify-end p-4'>
          <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
            ✖️ 
          </button>
        </div>
        <div className='flex flex-col px-6 items-center justify-start h-full text-xl font-light'>
          <p onClick={() => { handleScrollTo('hero'); setIsMenuOpen(false); }} className="cursor-pointer py-4">Home</p>
          <p onClick={() => { handleScrollTo('about'); setIsMenuOpen(false); }} className="cursor-pointer py-4">About</p>
          <p onClick={() => { handleScrollTo('roadmap'); setIsMenuOpen(false); }} className="cursor-pointer py-4">MileStone</p>
          <p onClick={() => { handleScrollTo('contact'); setIsMenuOpen(false); }} className="cursor-pointer py-4">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
