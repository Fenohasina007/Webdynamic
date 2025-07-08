import './index.css';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card.js';



function App() {
  const navLinks = [
    { name: "Accueil", href: "#Acceuil" },
    { name: "À propos", href: "#About" },
    { name: "Nos Services", href: "#services" },
    { name: "Partenaires", href: "#" },
    { name: "Formations", href: "#" },
    { name: "Contact", href: "#" },
  ];

  

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App relative h-screen font-montserrat">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white px-4 py-2 shadow">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/LOGONoBackground.png"
              alt="bleuIt logo"
              className="h-[50px] w-auto"
            />
            <p className='text-bleuIt text-xl font-bold'> ITDC MADA </p>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium ">
            {navLinks.map((link, index) => (
              <li key={index} className="text-[15px] font-bold  cursor-pointer font-touche text-black/80 relative group">
                <a href={link.href} className="hover:text-bleuIt group">
                  {link.name}
                </a>
                <div className="w-full h-[2px] bg-bleuIt opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </li>
            ))}
            <li>
              <a href="tel:+261345263787" className="bg-bleuIt text-white flex items-center gap-2 px-4 py-2 rounded 
             hover:bg-itdc  transition-all duration-200">
              <IoMdCall className="text-xl" />  Contactez-nous !
              </a> 
            </li>
            <li>
            <button><a href='#' className='text-3xl'> <IoIosSettings /></a></button>
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
            <ul
              className="lg:hidden flex flex-col items-start gap-3 mt-4 px-4 text-sm font-medium 
                        animate-slide-down origin-top cursor-pointer bg-white shadow-md rounded"
            >
              {navLinks.map((link, index) => (
                <li key={index} className="text-[13px] tracking-widest  text-black/80 cursor-pointer relative group">
                  <a href={link.href} className="hover:text-itdc group">
                    {link.name}
                  </a>
                  <div className="w-full h-[2px] bg-itdc opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </li>
              ))}
              <li>
              <a href="tel:+261345263787" className="bg-bleuIt text-white cursor-pointer px-4 py-2 rounded hover:bg-[#e79f53] flex items-center gap-2">
                <IoMdCall /> Contactez-nous 
                
              </a>
              <button><a href='#' className ='text-3xl'> <IoIosSettings /></a></button>
              </li>
            </ul>
          )}
      </header>

      {/* SECTION ACCUEIL */}
      <section id ="Acceuil"
        className=" relative h-[60%] bg-cover bg-center bg-no-repeat flex items-center justify-center"
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
          <a href="tel:+261345263787" className="bg-bleuIt text-white flex items-center gap-2 px-4 py-2 rounded 
             hover:shadow-[10px_11px_0_#e18728] transition-all duration-500">
          <IoMdCall className="text-2xl" /> Contactez-nous
          </a>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id ="About" className="">
        <div className=" bg-grisFond pl-20 Apropos">
          <h2 className="text-5xl font-bold  uppercase text-bleuIt pt-28 ">À propos de <br></br> <span className='text-itdc'>ITDC Mada</span> </h2><></>
          <div className='flex flex-row'>
            <div className="flex flex-col items-start  pt-6 ">
              <p className="text-lg text-black float-left font-light my-4">
              ITDC MADA, société SARL basée à Fianarantsoa, est le partenaire incontournable des entreprises malgaches qui veulent réussir leur transformation digitale. <br/> Grâce à son expertise et à des solutions innovantes, ITDC MADA propulse les organisations vers un avenir numérique performant.
              </p>
              <ul className='mt-6 font-light'>
                <li className='flex items-center mb-6 overflow-hidden whitespace-nowrap animate-typing'>
                <FaCheckCircle className='text-base text-bleuIt mr-10'/>Applications mobiles puissantes, hybrides ou natives, pensées pour vos utilisateurs.
                </li>
                <li className='flex items-center mb-6 overflow-hidden whitespace-nowrap animate-typing'>
                <FaCheckCircle className='text-base text-bleuIt mr-10'/>Des outils web et bureautiques sur mesure, pensés pour simplifier et optimiser vos processus.
                </li>
                <li className='flex items-center mb-6 overflow-hidden whitespace-nowrap animate-typing'>
                <FaCheckCircle className='text-base text-bleuIt mr-10'/>La référence malgache en solutions SIG et géomatique pour un pilotage territorial intelligent.
                </li>
              </ul>
              </div>
              
              <img src='/images/illustr1.png' className='lg:w-[500px] w-[400px] object-contain px-8 h-auto '></img>
           </div>
           <div className='Histoire'>
                
           </div>
        </div>
        <section className="bg-white py-12 px-6 sm:px-10 lg:px-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-bleuIt mb-6">Notre Mission</h2>
    <div className="w-20 h-1 mx-auto bg-itdc mb-6 rounded-full"></div>
    <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
      Accompagner les entreprises de Madagascar dans leur transformation numérique
      et valoriser leurs données environnementales grâce à des solutions informatiques
      innovantes et performantes.
    </p>
  </div>
</section>
<section className="bg-grisFond py-16 px-6 sm:px-10 lg:px-24">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-extrabold text-bleuIt text-center mb-4">Notre Parcours depuis 2017</h2>
    <p className="text-center text-lg text-gray-700 font-light mb-12">
      Notre parcours depuis notre création reflète notre engagement envers l'innovation et le développement durable.
    </p>

    {/* LIGNE DE TEMPS */}
    <div className="relative border-l-4 border-itdc pl-6 space-y-12">
      
      {/* Étape 1 - La création */}
      <div className="relative">
        <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-itdc border-4 border-white"></div>
        <h3 className="text-2xl font-bold text-bleuIt mb-2">La création</h3>
        <p className="text-gray-700 font-light leading-relaxed">
          Fondée en 2017 à Fianarantsoa, ITDC Mada est née d'une vision commune de mettre l'informatique au service du développement des entreprises et de la protection de l'environnement à Madagascar. Depuis nos débuts, nous avons constamment évolué pour répondre aux besoins changeants du marché, en développant une expertise pointue dans le développement d'applications et l'analyse de données environnementales.
        </p>
      </div>

      {/* Étape 2 - Notre évolution */}
      <div className="relative">
        <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-itdc border-4 border-white"></div>
        <h3 className="text-2xl font-bold text-bleuIt mb-2">Notre évolution</h3>
        <p className="text-gray-700 font-light leading-relaxed">
          Aujourd'hui, nous sommes fiers de notre parcours et des nombreux projets que nous avons menés avec succès. Notre équipe continue de s'agrandir et notre expertise s'approfondit avec chaque nouveau défi.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-bleuIt mb-4">Nos Valeurs</h2>
    <p className="text-lg sm:text-xl text-gray-600 font-light mb-6">
      Les principes qui guident chacune de nos décisions et actions au quotidien.
    </p>
    <p className="italic text-itdc text-base sm:text-lg font-medium mb-12">
      "Nos valeurs sont au cœur de notre identité et de notre approche."
    </p>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 text-left">
      {/* Valeur 1 */}
      <div className="flex items-start gap-4">
        <div className="text-3xl font-bold text-itdc">1</div>
        <div>
          <h3 className="text-xl font-semibold text-bleuIt mb-1">Innovation</h3>
          <p className="text-gray-700 font-light">
            Être à la pointe des technologies pour proposer des solutions créatives et efficaces.
          </p>
        </div>
      </div>

      {/* Valeur 2 */}
      <div className="flex items-start gap-4">
        <div className="text-3xl font-bold text-itdc">2</div>
        <div>
          <h3 className="text-xl font-semibold text-bleuIt mb-1">Qualité</h3>
          <p className="text-gray-700 font-light">
            Fournir des services et des produits fiables et durables.
          </p>
        </div>
      </div>

      {/* Valeur 3 */}
      <div className="flex items-start gap-4">
        <div className="text-3xl font-bold text-itdc">3</div>
        <div>
          <h3 className="text-xl font-semibold text-bleuIt mb-1">Proximité</h3>
          <p className="text-gray-700 font-light">
            Établir des relations de confiance et un accompagnement personnalisé avec nos clients.
          </p>
        </div>
      </div>

      {/* Valeur 4 */}
      <div className="flex items-start gap-4">
        <div className="text-3xl font-bold text-itdc">4</div>
        <div>
          <h3 className="text-xl font-semibold text-bleuIt mb-1">Expertise</h3>
          <p className="text-gray-700 font-light">
            Mettre à disposition notre savoir-faire dans les domaines du numérique et de l'environnement.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-bleuIt mb-12">Nos chiffres clés</h2>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      
      {/* Stat 1 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-itdc">150+</span>
        <p className="text-gray-700 font-light mt-2">Projets réalisés</p>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-itdc">45+</span>
        <p className="text-gray-700 font-light mt-2">Clients satisfaits</p>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-itdc">10+</span>
        <p className="text-gray-700 font-light mt-2">Années d'expérience</p>
      </div>

      {/* Stat 4 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-itdc">25+</span>
        <p className="text-gray-700 font-light mt-2">Experts</p>
      </div>

    </div>
  </div>
</section>
      </section>
      {/* SECTION SERVICES */}
      <section id="services" className="bg-grisFond py-20 px-6 sm:px-10 lg:px-24">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-bleuIt text-center mb-4">
      Nos Services d'Accompagnement Numérique
    </h2>
    <p className="text-center text-gray-700 font-light max-w-3xl mx-auto mb-16">
      Chez ITDC Mada, nous proposons une gamme complète de services pour accompagner votre entreprise dans sa transformation numérique et la valorisation de ses données environnementales.
    </p>

    <div className="grid gap-12 md:grid-cols-2">

      {/* Service 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-bleuIt">Développement d'Applications Mobiles, Web et Bureau</h3>
        </div>
        <p className="font-semibold mb-4">Solutions adaptées à vos besoins spécifiques</p>
        <p className="mb-4">
          Nous concevons et développons des applications sur mesure pour répondre à vos besoins spécifiques :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li><strong>Applications Mobiles (Android et iOS)</strong> : Pour améliorer l'engagement client, optimiser vos processus internes ou proposer de nouveaux services.</li>
          <li><strong>Applications Web</strong> : Plateformes interactives, sites e-commerce, outils de gestion en ligne, …</li>
          <li><strong>Applications Bureau</strong> : Logiciels performants pour la gestion de vos activités quotidiennes.</li>
        </ul>
        <p className="font-semibold mb-4">Avantages clés :</p>
        <p className="text-gray-700 mb-6">
          Modernisation de vos outils, amélioration de l'efficacité, meilleure expérience utilisateur, accès à de nouvelles opportunités.
        </p>
        <button className="bg-itdc text-white px-5 py-2 rounded-full hover:bg-[#d87624] transition">
          Discutons de votre projet d'application
        </button>
      </div>

      {/* Service 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-bleuIt">Accompagnement dans votre Transformation Numérique</h3>
        </div>
        <p className="font-semibold mb-4">Solutions adaptées à vos besoins spécifiques</p>
        <p className="mb-4">
          Nous vous aidons à intégrer les technologies numériques de manière stratégique dans votre entreprise :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Conseil et audit numérique.</li>
          <li>Stratégie digitale.</li>
          <li>Intégration de solutions logicielles.</li>
          <li>Formation et accompagnement au changement.</li>
        </ul>
        <p className="font-semibold mb-4">Avantages clés :</p>
        <p className="text-gray-700 mb-6">
          Optimisation de vos processus, réduction des coûts, amélioration de la compétitivité, meilleure prise de décision.
        </p>
        <button className="bg-itdc text-white px-5 py-2 rounded-full hover:bg-[#d87624] transition">
          Boostez votre transformation numérique
        </button>
      </div>

      {/* Service 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-bleuIt">Solutions Informatiques pour le Développement Durable</h3>
        </div>
        <p className="font-semibold mb-4">Solutions adaptées à vos besoins spécifiques</p>
        <p className="mb-4">
          Nous développons des solutions informatiques pour la gestion et l'analyse des données environnementales :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Systèmes d'information géographique (SIG).</li>
          <li>Plateformes de gestion de données environnementales.</li>
          <li>Outils de visualisation et d'analyse spatiale.</li>
        </ul>
        <p className="font-semibold mb-4">Avantages clés :</p>
        <p className="text-gray-700 mb-6">
          Meilleure compréhension des enjeux environnementaux, facilitation de la prise de décision, contribution au développement durable.
        </p>
        <button className="bg-itdc text-white px-5 py-2 rounded-full hover:bg-[#d87624] transition">
          Valorisez vos données environnementales
        </button>
      </div>

      {/* Service 4 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-bleuIt">Collecte et Analyse de Données Spatiales et Tabulaires</h3>
        </div>
        <p className="font-semibold mb-4">Solutions adaptées à vos besoins spécifiques</p>
        <p className="mb-4">
          Nous offrons des services complets de collecte, de traitement et d'analyse de données :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Acquisition de données sur le terrain (GPS, enquêtes, …)</li>
          <li>Traitement et nettoyage des données.</li>
          <li>Analyse statistique et spatiale.</li>
          <li>Visualisation et cartographie des résultats.</li>
        </ul>
        <p className="font-semibold mb-4">Avantages clés :</p>
        <p className="text-gray-700 mb-6">
          Informations précises et fiables, identification de tendances, aide à la décision stratégique, justification de vos actions.
        </p>
        <button className="bg-itdc text-white px-5 py-2 rounded-full hover:bg-[#d87624] transition">
          Obtenez des informations clés à partir de vos données
        </button>
      </div>
    </div>

    {/* Call to action */}
    <div className="mt-16 text-center">
      <p className="text-xl font-semibold text-gray-800 mb-4">
        Besoin d'un service personnalisé ?
      </p>
      <a
        href="tel:+261345263787"
        className="inline-block bg-bleuIt text-white font-bold px-8 py-3 rounded-full hover:bg-[#d87624] transition"
      >
        Contactez-nous dès aujourd'hui
      </a>
      <p className="mt-3 text-gray-600 max-w-xl mx-auto">
        Notre équipe est à votre disposition pour discuter de vos besoins et vous proposer des solutions sur mesure.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
