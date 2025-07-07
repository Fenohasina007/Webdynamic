import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

function App() {
  const items = ["Accueil", "A propos", "Contact", "Service", "Projet", "Formation"];
  
  const [activeIndex, setActiveIndex] = useState(0);
  // responsive nav et delai
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
      <nav className='flex sticky top-0 bg-[white] justify-between items-center shadow-md shadow-[#8da9b3] py-2 px-[20px] lg:px-[70px]'>
        <div>
          <img src="/img/Logo.png" alt="" className='w-[100px]'/>
        </div>
        <div className='flex items-center space-x-3 lg:space-x-6'>
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
        {/* </div>
        <div> */}
          <button className='border-white rounded-[3px] text-[white] py-1 px-5 bg-[#1282a7] flex items-center'><FaFacebook className='mr-[10px]' /> Facebook</button>
          <h1 onClick={() => setClicked(!clicked)} className='text-[30px] grid lg:hidden cursor-pointer'><IoMenu /></h1>
          <h1 className='text-[25px] cursor-pointer'><IoSettingsOutline /></h1>
        </div>
      </nav>
            {/* nav responsive  */}
      <nav className={`fixed flex lg:hidden justify-end w-[100%] pt-2 text-center h-full transition-all duration-1000 ${clicked ? 'w-[-150%] bg-[#1818182B]' : 'w-[155%] '} ${isHidden ? 'hidden' : ''}`}>
        <div className='bg-white rounded-tl-[5px] h-full p-5 w-[270px]'>
          <img src="/img/Logo.png" alt="" className='w-20 mb-10'/>
          <ul>
                {items.map((item, index) => (
              <li onClick={() => setActiveIndex(index)} className={`py-2 my-4 border-2 rounded-[4px] hover:bg-[#0a475b] hover:text-[white] transition-all duration-300 ${activeIndex === index ? 'bg-[#0a475b] text-white' : 'hover:bg-[#0a475b] hover:text-white'}`} key={index}>{item}</li>
                ))}
          </ul>
          <p className='mt-[35px] text-[11px]'>© 2025 HAI DIGITAL. Tous droits réservés.</p>
        </div>
      </nav>

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
           <img src="/img/groupe.png" alt=""  className='lg:w-[330px] lg:h-[330px] w-[280px] lg:mb-[0px] mb-[10px] h-[280px] object-contain'/>
          </div>
          <div className='lg:w-[600px]'>
            {/* style ligne roa */}
              <div className='flex items-center'>
                <h1 className='text-[30px] font-semibold'>A propos</h1>
                <div className='ml-[9px] mt-[9px]'>
                  <p className='w-[30px] h-1 rounded-full mb-1 bg-white'></p>
                  <p className='w-[45px] h-1 rounded-full bg-white'></p>
                </div>
              </div>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, accusantium enim a totam, laudantium assumenda deleniti sit voluptate magnam harum tempora ea facere quasi delectus facilis ducimus molestiae quas nam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum itaque nisi autem explicabo fugiat qui, veniam dolorem ullam minus? Voluptatem sunt corporis cum repellendus unde modi porro dicta ut!
              Iste, nam suscipit veniam velit vero perspiciatis! Sint tempore voluptatem quisquam temporibus minus non pariatur libero nesciunt numquam, perspiciatis quis dolore aperiam modi nobis culpa, atque odit, ut suscipit praesentium.
              </p>
          </div>
      </div>

      {/* section3 : Service */}
      <div className='text-center py-[40px]'>
        <h1 className='text-[30px] font-semibold text-[#1282a7]'>Nos service</h1>
        <p className='text-[20px]'>Nous proposons des services pour la réalisation de vos <span className='font-bold'>projets numériques</span></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et ullam veniam velit eveniet reiciendis laboriosam nulla, fuga sunt omnis id quos, laborum quia ut? Odio voluptas error vero ipsa.</p>
      </div>
    </main>
  );
}
export default App;
