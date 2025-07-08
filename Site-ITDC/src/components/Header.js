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
              className="text-[15px] font-bold cursor-pointer font-touche text-black/80 relative group"
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
          className="lg:hidden text-2xl text-bleuIt cursor-pointer focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-start gap-3 mt-4 px-4 text-sm font-medium animate-slide-down origin-top cursor-pointer bg-white shadow-md rounded">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-[13px] tracking-widest text-black/80 cursor-pointer relative group"
            >
              <Link to={link.path} className="hover:text-itdc group">
                {link.name}
              </Link>
              <div className="w-full h-[2px] bg-itdc opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
          ))}
          <li className="flex gap-2 items-center">
            <a
              href="tel:+261345263787"
              className="bg-bleuIt text-white px-4 py-2 rounded hover:bg-[#e79f53] flex items-center gap-2"
            >
              <IoMdCall /> Contactez-nous
            </a>
            <button>
              <a href="#" className="text-3xl">
                <IoIosSettings />
              </a>
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
