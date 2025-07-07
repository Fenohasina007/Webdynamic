import './index.css';

function App() {
  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "À propos", href: "#" },
    { name: "Nos Services", href: "#" },
    { name: "Partenaires", href: "#" },
    { name: "Formations", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <div className="App relative h-screen">
      {/* HEADER TRANSPARENT POSITION FIXÉE EN HAUT */}
      <header className="absolute top-0 left-0 w-full z-50 bg-white px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <img
              src="/images/LOGONoBackground.png"
              alt="ITDC logo"
              className="h-[50px] w-auto"
            />
          </div>
          


          <ul className="items-center space-x-6 text-sm font-medium hidden sm:block">
            {navLinks.map((link, index) => (
              <li key={index} className="text-[13px] capitalize tracking-widest text-black/80 relative group">
                <a href={link.href} className="hover:text-[#0faae7] group">
                  {link.name}
                </a>
                <div className="w-full h-[2px] bg-[#0faae7] opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </li>
            ))}

            <li>
              <a href="#" className="bg-itdc text-white px-4 py-2 rounded hover:bg-[#e79f53]">
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/*-------------------------------- SECTION ACCEUIL ----------------------*/}
      <section
        className="Acceuil relative h-[60%] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/fond1.jpg')" }}
      >
        {/* OVERLAY SOMBRE ET FLOU */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        {/* CONTENU CENTRÉ */}
        <div className="mt- z-10 flex flex-col items-center text-center gap-4 px-4 max-w-3xl">
          <h1 className="text-4xl text-white font-bold drop-shadow-lg">
            ITDC <span className='text-itdc'>Mada</span>  – Experts en solutions numériques innovantes
          </h1>
          <div className="w-[200px] h-[4px] bg-[#0faae7] opacity-60 rounded"></div>
          <p className="text-2xl text-white font-light">
            Depuis 2017, nous transformons le numérique et les données environnementales en leviers de croissance pour les entreprises à Madagascar.
          </p>
          <a href="#" className="bg-itdc text-white px-4 py-2 rounded hover:bg-[#e79f53]">
                Contactez-nous
              </a>
        </div>
        
      </section>
      
{/*-------------------------------- SECTION À PROPOS ----------------------*/}
      
      <section
        className=" A-propos ">
        
        
      </section>
    </div>
  );
}

export default App;
