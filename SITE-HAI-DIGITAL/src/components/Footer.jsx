// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Footer({ items, activeIndex, setActiveIndex }) {
  return (
    <div className='lg:pt-[50px] pt-[20px] text-white text-md' style={{ backgroundColor: 'rgb(17, 113, 145)' }}>
      <div className='lg:px-[80px] px-[60px]'>
        <div className='lg:flex justify-between pb-7 cursor-pointer border-b-[1px]'>
          <div className="flex lg:mt-0 mt-7 flex-col w-[350px] text-white items-start gap-2">
            <img src="/img/Logo.png" alt="Logo HAI DIGITAL" className="w-[80px] h-[80px] lg:ml-0 ml-3 object-contain bg-white p-1 rounded-full" />
            <p className="text-sm lg:mt-3 mt-4"><span className='text-[25px] font-semibold'>HAI DIGITAL --</span><br /> l’intelligence numérique au service d’un avenir durable.</p>
          </div>

          <div className="text-white lg:mt-0 mt-7 space-y-[8px]">
            <h1 className='text-[25px] mb-2 lg:mb-5 font-semibold'>Information legal</h1>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
            <p>Conditions générales</p>
            <p>Engagés pour la protection de vos données.</p>
          </div>

          <div className='text-white lg:mt-0 mt-7'>
            <h1 className='text-[25px] mb-2 lg:mb-5 font-semibold'>Contact</h1>
            <ul className='footer'>
              <li className='flex items-center'><FaLocationDot className='mr-3' />Soatsiadino Fianarantsoa</li>
              <li className='flex items-center'><MdEmail className='mr-3' />hai.digital.fianar@gmail.com</li>
              <li className='flex items-center'><FaFacebook className='mr-3' />Hai Digital</li>
              <li className='flex items-center'><IoCall className='mr-3' />034 76 171 72</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='lg:flex text-center justify-between lg:px-[80px] px-3 py-5'>
        <p>© 2025 HAI DIGITAL — Tous droits réservés</p>
        <ul className='flex lg:space-x-3 lg:mt-0 mt-5 justify-around'>
          {items.map((item, index) => (
            <li key={index} onClick={() => setActiveIndex(index)} className='overflow-hidden h-[1.5em] group'>
              <div className={`transition-transform duration-700 ease-in-out ${activeIndex === index ? '-translate-y-[1.5em]' : 'group-hover:-translate-y-[1.5em]'}`}>
                <p className='h-[1.5em] flex items-center justify-center py-3 lg:px-4 px-1'>{item}</p>
                <p className='h-[1.5em] text-[#1282a7] flex items-center justify-center bg-white rounded-[2px] py-3 lg:px-4'>{item}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
