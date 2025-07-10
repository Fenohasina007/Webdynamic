import React from 'react';
import Header from './components/Header';
import { IoMdCall } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App font-montserrat">
      {/* HEADER */}
      <Header />

      {/* SECTION ACCUEIL */}
      <section
        id="Acceuil"
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/fond1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="z-10 flex flex-col items-center text-center gap-4 px-4 pt-24 max-w-3xl">
          <h1 className="text-white font-bold drop-shadow-lg text-2xl sm:text-3xl md:text-4xl">
            ITDC <span className="text-itdc">Mada</span> – Experts en solutions numériques innovantes
          </h1>
          <div className="w-[150px] sm:w-[200px] h-[2px] bg-bleuIt rounded"></div>
          <p className="text-white font-light text-base sm:text-lg">
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
      <section id="About" className="bg-grisFond pt-20 pb-10 px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-bleuIt mb-8 text-left">
          QUI <br /> <span className="text-itdc">SOMMES-NOUS ?</span>
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Texte */}
          <div className="flex-1 text-black font-light text-justify">
            <p className="text-base sm:text-lg mb-6">
              ITDC MADA, société SARL basée à Fianarantsoa, est le partenaire incontournable des entreprises malgaches qui veulent réussir leur transformation digitale.
              <br /> Grâce à son expertise et à des solutions innovantes, ITDC MADA propulse les organisations vers un avenir numérique performant.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-bleuIt mr-3 mt-1" />
                <span>Applications mobiles puissantes, hybrides ou natives, pensées pour vos utilisateurs.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-bleuIt mr-3 mt-1" />
                <span>Des outils web et bureautiques sur mesure, pensés pour simplifier et optimiser vos processus.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-bleuIt mr-3 mt-1" />
                <span>La référence malgache en solutions SIG et géomatique pour un pilotage territorial intelligent.</span>
              </li>
            </ul>
          </div>
          

          {/* Image */}
          <div className="flex-1">
            <img
              src="/images/illustr1.png"
              className="w-full max-w-[600px] h-auto object-contain mx-auto"
              alt="Illustration"
            />
          </div>
        </div>
        <div>
        <div className='flex items-center justify-center'>
        <div >
      <h3 className="text-4xl font-bold text-bleuIt">15+</h3>
      <p className="text-gray-700 text-sm mt-2">Années d'expérience</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-bleuIt">50+</h3>
      <p className="text-gray-700 text-sm mt-2">Projets réalisés</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-bleuIt">12+</h3>
      <p className="text-gray-700 text-sm mt-2">Partenaires</p>
    </div>
    </div>
        </div>
        <div className="mt-8 flex justify-start">
          <Link
            to="/about"
            className="relative inline-block px-6 py-2 font-medium text-white bg-itdc rounded group transition-all duration-300"
          >
            <span
              className="absolute inset-0 rounded outline outline-2 outline-bleuIt opacity-0 group-hover:opacity-100 group-hover:outline-offset-4 transition-all duration-300 ease-out pointer-events-none"
            ></span>
            <span className="relative z-10">En savoir plus</span>
          </Link>
        </div>
        
          
      </section>

      <section id="Services" className="bg-white pt-20 pb-10 px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-bleuIt mb-8 text-left">
          LES SERVICES  <br /> <span className="text-itdc">QUE NOUS PROPOSONS</span>
        </h2>

        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
  {/* Bloc 1 */}
  <div className="bg-grisFond p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-bleuIt mb-2">Développement d'Applications</h3>
    <p className="text-gray-700 mb-4">
      Création de solutions logicielles sur mesure pour optimiser vos processus et améliorer votre interaction client.
    </p>
    <ul className="text-sm space-y-2 text-gray-600">
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Solutions personnalisées</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Approche innovante</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Expertise locale et internationale</li>
    </ul>
  </div>

  {/* Bloc 2 */}
  <div className="bg-grisFond p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-bleuIt mb-2">Accompagnement Numérique</h3>
    <p className="text-gray-700 mb-4">
      Conseils et solutions pour intégrer efficacement les technologies numériques au cœur de votre activité.
    </p>
    <ul className="text-sm space-y-2 text-gray-600">
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Solutions personnalisées</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Approche innovante</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Expertise locale et internationale</li>
    </ul>
  </div>

  {/* Bloc 3 */}
  <div className="bg-grisFond p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-bleuIt mb-2">Développement Environnemental</h3>
    <p className="text-gray-700 mb-4">
      Solutions informatiques dédiées à la gestion et à la valorisation des données environnementales.
    </p>
    <ul className="text-sm space-y-2 text-gray-600">
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Solutions personnalisées</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Approche innovante</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Expertise locale et internationale</li>
    </ul>
  </div>

  {/* Bloc 4 */}
  <div className="bg-grisFond p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-bleuIt mb-2">Collecte et Analyse de Données</h3>
    <p className="text-gray-700 mb-4">
      Acquisition, traitement et interprétation de données spatiales et tabulaires pour des analyses approfondies.
    </p>
    <ul className="text-sm space-y-2 text-gray-600">
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Solutions personnalisées</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Approche innovante</li>
      <li className='flex items-center'><FaCheckCircle className="text-bleuIt mr-3 mt-1" /> Expertise locale et internationale</li>
    </ul>
  </div>
  <div className="mt-8 flex justify-start">
          <Link
            to="/about"
            className="relative inline-block px-6 py-2 font-medium text-white bg-itdc rounded group transition-all duration-300"
          >
            <span
              className="absolute inset-0 rounded outline outline-2 outline-bleuIt opacity-0 group-hover:opacity-100 group-hover:outline-offset-4 transition-all duration-300 ease-out pointer-events-none"
            ></span>
            <span className="relative z-10">Consulter nos services</span>
          </Link>
        </div>
</div>

          
      </section>
      <section>
        {/* SECTION Footer */}
      </section>
      
    </div>
  );
}
