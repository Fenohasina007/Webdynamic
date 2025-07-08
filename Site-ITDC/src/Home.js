import React from 'react';
import Header from './components/Header';
import { IoMdCall } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="App relative h-screen font-montserrat">
      {/* HEADER */}
      <Header />

      {/* SECTION ACCUEIL */}
      <section
        id="Acceuil"
        className="relative h-[60%] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/fond1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="z-10 flex flex-col items-center  text-center gap-4 px-4 mt-[70px] max-w-3xl">
          <h1 className="lg:text-4xl text-2xl text-white font-bold drop-shadow-lg ">
            ITDC <span className="text-itdc">Mada</span> – Experts en solutions numériques innovantes
          </h1>
          <div className="w-[200px] h-[2px] bg-bleuIt  rounded"></div>
          <p className="lg:text-xl text-base text-white font-light ">
            Depuis 2017, nous transformons le numérique et les données environnementales en leviers de croissance pour les entreprises à Madagascar.
          </p>
          <a
            href="tel:+261345263787"
            className="bg-bleuIt text-white flex items-center gap-2 px-4 py-2 rounded hover:shadow-[10px_11px_0_#e18728] transition-all duration-500"
          >
            <IoMdCall className="text-2xl" /> Contactez-nous
          </a>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="About" className="">
        <div className="bg-grisFond pl-20 Apropos">
          <h2 className="text-5xl font-bold  uppercase text-bleuIt pt-28 ">
            À propos de <br /> <span className="text-itdc">ITDC Mada</span>
          </h2>
          <div className="flex flex-row">
            <div className="flex flex-col items-start  pt-6 ">
              <p className="text-lg text-black float-left font-light my-4">
                ITDC MADA, société SARL basée à Fianarantsoa, est le partenaire incontournable des entreprises malgaches qui veulent réussir leur transformation digitale.
                <br /> Grâce à son expertise et à des solutions innovantes, ITDC MADA propulse les organisations vers un avenir numérique performant.
              </p>
              <ul className="mt-6 font-light">
                <li className="flex items-center mb-6 overflow-hidden whitespace-nowrap animate-typing">
                  <FaCheckCircle className="text-base text-bleuIt mr-10" />
                  Applications mobiles puissantes, hybrides ou natives, pensées pour vos utilisateurs.
                </li>
                <li className="flex items-center mb-6 overflow-hidden whitespace-nowrap animate-typing">
                  <FaCheckCircle className="text-base text-bleuIt mr-10" />
                  Des outils web et bureautiques sur mesure, pensés pour simplifier et optimiser vos processus.
                </li>
                <li className="flex items-center mb-6 overflow-hidden whitespace-nowrap animate-typing">
                  <FaCheckCircle className="text-base text-bleuIt mr-10" />
                  La référence malgache en solutions SIG et géomatique pour un pilotage territorial intelligent.
                </li>
              </ul>
            </div>

            <img
              src="/images/illustr1.png"
              className="lg:w-[500px] w-[400px] object-contain px-8 h-auto "
              alt="Illustration"
            />
          </div>
        </div>

        {/* Autres sections (Mission, chiffres, services...) 
            Tu peux aussi envisager de les extraire dans des composants séparés pour clarifier */}

        {/* ... place ton code existant ici ... */}
      </section>
    </div>
  );
}
