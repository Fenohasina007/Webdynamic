import './App.css';
import { useEffect, useState } from 'react';
import { GrLinkNext } from "react-icons/gr";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const items = ["Accueil", "A propos", "Service", "Projet", "Formation"];
  const services = [
    {
      title: "Développements",
      image: "img/service.png",
      description:
        "Lorem ipsum dolor sit amet conenim hic totam illum nostrum esse alias.",
    },
    {
      title: "Design graphique",
      image: "img/service.png",
      description:
        "Création de visuels professionnels pour vos interfaces",
    },
    {
      title: "Consulting digital",
      image: "img/service.png",
      description:
        "Accompagnement stratégique pour réussir votre transformation numérique.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // non inspecter F12 et Click droite
  useEffect(() => {
    const disableInspect = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', disableInspect);
    return () => {
      document.removeEventListener('keydown', disableInspect);
    };
  }, []);

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableRightClick);
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <main className=''>
      {/* navBar */}
      <Navbar items={items} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* section1 : Accueil */}
      <div className='flex flex-col-reverse lg:flex-row justify-around items-center lg:pt-0 pt-[25px] sm:pt-[30px] min-h-[80vh]'> {/*border-2*/}
        <div className='lg:p-0 p-5'>
          <h1 className='lg:text-[40px] text-[30px] text-[#1282a7]'>HAI <span className='font-bold'>DIGITAL</span>,</h1>
          <p className='lg:text-[30px] text-[25px] font-[poppins] font-semibold'>L'intelligence numerique<br className="hidden lg:inline"/>au service d'un avenir durable</p>
          <p>une entreprise axée sur le numérique et la digitalisation offrant<br className="hidden lg:inline"/> des solutions pour le développement durable.</p>
          <button className='border-white rounded-[3px] text-[18px] text-[white] mt-7 py-2 px-5 bg-[#1282a7] flex items-center cursor-pointer'>Nos Services <GrLinkNext className='ml-3 mt-[1px]' /></button>
        </div>
        <img src="/img/Accueil.png" alt="" className='lg:w-[410px] lg:h-[410px] w-[280px] sm:mb-[5px] h-[280px] object-contain' />
      </div>

      {/* section2 : A propos */}
      <div className='lg:flex justify-around text-white pb-10 pt-[80px] lg:px-[50px] px-5' style={{backgroundColor:'rgb(17, 113, 145)'}}>
        <div className='w-full lg:w-auto flex justify-center lg:block'>
          <img src="/img/groupe.png" alt="" className='lg:w-[330px] lg:h-[330px] w-[280px] lg:mb-[0px] mb-[10px] h-[280px] object-contain'/>
        </div>
        <div className='lg:w-[580px]'>
          {/* style ligne roa */}
          <div className='flex items-center'>
            <h1 className='text-[40px] font-semibold'>A propos</h1>
            <div className='ml-[9px] mt-[12px]'>
              <p className='w-[40px] h-[5px] rounded-full mb-2 bg-white'></p>
              <p className='w-[60px] h-[5px] rounded-full bg-white'></p>
            </div>
          </div>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, accusantium enim a totam, laudantium assumenda deleniti sit voluptate magnam harum tempora ea facere quasi delectus facilis ducimus molestiae quas nam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum itaque nisi autem explicabo fugiat qui, veniam dolorem ullam minus? Voluptatem sunt corporis cum repellendus unde modi porro dicta ut!
              Iste, nam suscipit veniam velit vero perspiciatis! Sint tempore voluptatem quisquam temporibus minus non pariatur libero nesciunt numquam, perspiciatis quis dolore aperiam modi nobis culpa, atque odit, ut suscipit praesentium.</p>
        </div>
      </div>

      {/* section3 : Service */}
      <div className='py-[40px] px-10'>
        <div className='text-center'>
          <h1 className='text-[30px] font-semibold text-[#1282a7]'>Nos service</h1>
          <p className=' text-[18px]'>Nous proposons des services pour la réalisation de vos <span className='font-bold'>projets numériques</span></p>
        </div>
        {/* card service  */}
        <div className='mt-[80px] mb-[80px] lg:flex justify-center lg:space-x-10'>
          {services.map((service, index) => (
            <div key={index} className='border-2 lg:mt-0 mt-8 w-ful  cursor-pointer shadow-md rounded-[3px] lg:w-[300px] px-6 py-10 sm:px-10 lg:py-8'>
              <div className='flex justify-cente'>
                <img src={service.image} alt="" className='w-[130px] mx-auto object-contain' />
              </div>
              <h1 className='font-bold mt-10'>{service.title}</h1>
              <p>{service.description}</p>
              <button className='bg-[#1282a7] w-full py-[5px] mt-3 px-7 text-white rounded-[3px]'>voir plus</button>
            </div>
          ))}
        </div> 
      </div>

      {/* section4 : formation */}
      <div className='flex flex-col-reverse lg:flex-row justify-around text-white pb-10 pt-[80px] lg:px-[50px] px-5' style={{backgroundColor:'rgb(17, 113, 145)'}}>
        <div className='lg:w-[580px]'>
          {/* style ligne roa */}
          <div className='flex items-center'>
            <div className='mr-[7px] mt-[7px] flex flex-col items-end'>
              <p className='w-[40px] h-[5px] rounded-full mb-2 bg-white'></p>
              <p className='w-[60px] h-[5px] rounded-full bg-white'></p>
            </div>
            <h1 className='text-[40px] font-semibold'>Formation</h1>
          </div>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, accusantium enim a totam, laudantium assumenda deleniti sit voluptate magnam harum tempora ea facere quasi delectus facilis ducimus molestiae quas nam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum itaque nisi autem explicabo fugiat qui, veniam dolorem ullam minus? Voluptatem sunt corporis cum repellendus unde modi porro dicta ut!
              Iste, nam suscipit veniam velit vero perspiciatis! Sint tempore voluptatem quisquam temporibus minus non pariatur libero nesciunt numquam, perspiciatis quis dolore aperiam modi nobis culpa, atque odit, ut suscipit praesentium.</p>
        </div>
        <div className='w-full lg:w-auto flex justify-center lg:block'>
          <img src="/img/freepik.png" alt="" className='lg:w-[360px] lg:h-[360px] w-[280px] lg:mb-[0px] mb-[10px] h-[280px] object-contain'/>
        </div>
      </div>

      {/* section5 : projet */}
      <div className='lg:flex justify-around text-black pb-10 pt-[80px] lg:px-[50px] px-5 bg-white'>
        <div className='w-full lg:w-auto flex justify-center lg:block'>
          <img src="/img/groupe.png" alt="" className='lg:w-[330px] lg:h-[330px] w-[280px] lg:mb-[0px] mb-[10px] h-[280px] object-contain'/>
        </div>
        <div className='lg:w-[580px]'>
          {/* style ligne roa */}
          <div className='flex text-[#1282a7] items-center'>
            <h1 className='text-[40px] font-semibold'>Nos projet</h1>
            <div className='ml-[9px] mt-[12px]'>
              <p className='w-[40px] h-[5px] rounded-full mb-2 bg-[#1282a7]'></p>
              <p className='w-[60px] h-[5px] rounded-full bg-[#1282a7]'></p>
            </div>
          </div>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, accusantium enim a totam, laudantium assumenda deleniti sit voluptate magnam harum tempora ea facere quasi delectus facilis ducimus molestiae quas nam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum itaque nisi autem explicabo fugiat qui, veniam dolorem ullam minus? Voluptatem sunt corporis cum repellendus unde modi porro dicta ut!
              Iste, nam suscipit veniam velit vero perspiciatis! Sint tempore voluptatem quisquam temporibus minus non pariatur libero nesciunt numquam, perspiciatis quis dolore aperiam modi nobis culpa, atque odit, ut suscipit praesentium.</p>
        </div>
      </div>

      {/* section6 : footeur */}
      <Footer items={items} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </main>
  );
}

export default App;
