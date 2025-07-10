import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';
import { IoIosSettings } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Nos Services", path: "#" },
    { name: "Partenaires", path: "#" },
    { name: "Formations", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white px-4 py-2 shadow">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/LOGONoBackground.png"
            alt="bleuIt logo"
            className="h-[50px] w-auto"
          />
          <p className="text-bleuIt text-xl font-bold">ITDC MADA</p>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-[12px] font-bold cursor-pointer font-touche text-black/80 relative group"
            >
              <Link to={link.path} className="hover:text-bleuIt group">
                {link.name}
              </Link>
              <div className="w-full h-[2px] bg-bleuIt opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
          ))}
          <li>
            <a
              href="tel:+261345263787"
              className="bg-bleuIt text-white flex items-center gap-2 px-4 py-2 rounded hover:bg-itdc transition-all duration-200"
            >
              <IoMdCall className="text-xl" /> Contactez-nous !
            </a>
          </li>
          <li>
            <button>
              <a href="#" className="text-3xl">
                <IoIosSettings />
              </a>
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[20px] font-bold cursor-pointer font-touche text-black/80 relative group"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

  {/* Mobile menu (side panel) */}
<div
  className={`lg:hidden items-center justify-center fixed top-0 right-0 h-full w-1/2 bg-white shadow-md transform transition-transform duration-300 z-40 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <div className="flex flex-col h-full p-6">
    {/* Close button */}
    <div className="flex justify-end mb-6">
      <button
        onClick={() => setIsOpen(false)}
        className="text-2xl text-bleuIt focus:outline-none"
        aria-label="Fermer le menu"
      >
        <FiX />
      </button>
    </div>

    {/* Navigation Links */}
    <ul className="flex items-center flex-col gap-5 text-sm font-medium">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className="text-[14px] tracking-wide text-black/80 relative group"
        >
          <Link
            to={link.path}
            onClick={() => setIsOpen(false)} // ✅ Ferme le menu au clic
            className="hover:text-bleuIt transition-colors duration-300 group"
          >
            {link.name}
          </Link>
          <div className="w-full h-[2px] bg-bleuIt opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </li>
      ))}
      <li className="flex gap-3 items-center">
        
        <button
          className="text-xl text-white flex items-center bg-bleuIt cursor-pointer rounded hover:bg-itdc transition-all duration-200 px-4 py-2" 
        >
          <IoIosSettings /> Paramètres CMS
        </button>
      </li>
    </ul>
  </div>
</div>

    </header>
    
  );
}
