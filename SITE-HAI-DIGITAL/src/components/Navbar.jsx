// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { IoMenu, IoSettingsOutline, IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";

function Navbar({ items, activeIndex, setActiveIndex }) {
  const [clicked, setClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (clicked) {
      setIsHidden(false);
    } else {
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <>
      {/* NavBar principale */}
      <nav className='flex sticky top-0 bg-[white] justify-between items-center shadow-md shadow-[#8da9b3] py-2 px-[20px] lg:px-[70px]'>
        <div>
          <img src="/img/Logo.png" alt="Logo" className='w-[100px]' />
        </div>
        <div className='flex items-center space-x-3 lg:space-x-8'>
          <ul className='lg:flex space-x-5 hidden'>
            {items.map((item, index) => (
              <li key={index} onClick={() => setActiveIndex(index)} className='overflow-hidden h-[1.5em] group'>
                <div className={`transition-transform duration-700 ease-in-out ${activeIndex === index ? '-translate-y-[1.5em]' : 'group-hover:-translate-y-[1.5em]'}`}>
                  <p className='h-[1.5em] flex items-center justify-center'>{item}</p>
                  <p className='h-[1.5em] text-[#1282a7] flex items-center justify-center'>{item}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className='border-white rounded-[3px] text-white py-1 px-5 bg-[#1282a7] flex items-center'><FaFacebook className='mr-[10px]' /> Facebook</button>
          <h1 className='text-[25px] cursor-pointer'><IoSettingsOutline /></h1>
          <h1 onClick={() => setClicked(!clicked)} className='text-[30px] grid lg:hidden cursor-pointer'>{clicked ? <IoClose /> : <IoMenu />}</h1>
        </div>
      </nav>

      {/* Navbar responsive */}
      <nav className={`fixed flex lg:hidden justify-end w-full right-0 pt-2 text-center h-full transition-all duration-1000 backdrop-blur-[2px] bg-black/10 ${clicked ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'} ${isHidden ? 'hidden' : ''}`}>
        <div className='bg-white rounded-tl-[5px] h-full p-5 w-[270px]'>
          <img src="/img/Logo.png" alt="" className='w-20 mb-10' />
          <ul>
            {items.map((item, index) => (
              <li onClick={() => {setActiveIndex(index);setClicked(false)}} className={`py-2 my-4 border-2 rounded-[4px] hover:bg-[#0a475b] hover:text-white transition-all duration-300 ${activeIndex === index ? 'bg-[#0a475b] text-white' : ''}`} key={index}>{item}</li>
            ))}
          </ul>
          <p className='mt-[35px] text-[11px]'>© 2025 HAI DIGITAL. Tous droits réservés.</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
