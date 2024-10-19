import React from 'react';

function Nav() {
  // Function to handle scroll to the corresponding section
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling effect
    }
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
    </div>
  );
}

export default Nav;
