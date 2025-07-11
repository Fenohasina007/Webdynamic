import { useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("A propos");

  const CARD = [
    { title: "A propos" },
    { title: "Accueil" },
    { title: "Contact" },
    { title: "Service" },
    { title: "Formation" },
    { title: "Galerie" },
    { title: "Dashboard" },
  ];

  const CARDS = [
    {
      title: "Navbar",
      description: "Personalize your navbar with CMS content management system",
      url: "",
    },
    {
      title: "Footer",
      description: "Personalize your Footer with CMS content management system",
      url: "#",
      // icon: <img alt="Figma logo" src="" />,
    },
    {
      title: "Heroic section",
      description: "Personalize your Section héroïque with CMS content management system",
      url: "#",
    },
    {
      title: "Section 1",
      description: "Personalize your Section 1 with CMS content management system",
      url: "#",
    },
    {
      title: "Section 2",
      description: "Personalize your Section 2 with CMS content management system",
      url: "#",
    },
    {
      title: "Section 3",
      description: "Personalize your Section 3 with CMS content management system",
      url: "#",
    },
    {
      title: "Section 4",
      description: "Personalize your Section 4 with CMS content management system",
      url: "#",
    },
    {
      title: "Card",
      description: "Personalize your Card with CMS content management system",
      url: "#",
      // icon: <img alt="Flowbite Pro logo" src="" />,
    },
    {
      title: "Images Slider",
      description: "Personalize your images Slider with CMS content management system",
      url: "#",
      // icon: <img alt="Figma logo" src="" />,
    },
    {
      title: "Registration forms",
      description: "Personalize your Formulaires de Formation with CMS content management system",
      url: "",
    },
    {
      title: "Contact Form",
      description: "Personalize your Formulaire de Contact with CMS content management system",
      url: "#",
    },
    {
      title: "Payment Form",
      description: "Personalize your Formulaire de Payement with CMS content management system",
      url: "#",
      // icon: <img alt="Flowbite Pro logo" src="" />,
    },
  ];

  // Fonction pour filtrer les cartes en fonction de l'élément de navigation sélectionné
  const getFilteredCards = () => {
    if (selectedNav === "A propos") {
      return CARDS;
    } else if (selectedNav === "Accueil") {
        return CARDS.filter(
          (card) => card.title == "Navbar" || card.title == "Heroic section" || card.title == "Footer"
        );
    } else if (selectedNav === "Contact") {
        return CARDS.filter(
          (card) => card.title === "Contact Form" || card.title === "Section héroïque" || card.title == "Footer" || card.title == "Navbar"
        );
    }
    return CARDS;
  };

  return (
    <div className="relative flex h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 size-full">
        <div className="relative h-full w-full select-none">
          <img
            className="absolute right-0 min-w-dvh dark:hidden"
            alt="Pattern Light"
            src="/pattern-light.svg"
          />
          <img
            className="absolute right-0 hidden min-w-dvh dark:block"
            alt="Pattern Dark"
            src="/pattern-dark.svg"
          />
        </div>
      </div>

      {/* Mobile hamburger button */}
      {!sidebarOpen && (
        <button
          className="absolute top-4 left-4 block lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 z-10"
          onClick={() => setSidebarOpen(true)}
        >
          <HiMenu className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-opacity-50 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`z-20 fixed inset-y-0 left-0 w-50 transform bg-gray-50 dark:bg-gray-800 p-6 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 underline">
            Content management
          </h2>
          {/* Close button for mobile */}
          <button
            className="lg:hidden text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2">
          {CARD.map((item) => (
          <button
          key={item.title}
          className={`block px-4 py-2 rounded-md w-full text-left transition-colors ${
            selectedNav === item.title
              ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => setSelectedNav(item.title)}
        >
          {item.title}
        </button>
          ))}
        </nav>
        <div className="fixed bottom-7 flex items-center">
          <div className="w-12 h-12 bg-gray-500 rounded-full overflow-hidden">
            <img
              src="/figma.svg"
              alt="image introuvable"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="dark:text-gray-200 ml-5">Mamisoa</h1>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 overflow-y-auto p-8 transition-all duration-300 mt-16 lg:mt-0 relative flex flex-col items-center z-10`}
      >
        <div className="fixed top-4 right-4 z-20">
          <DarkThemeToggle />
        </div>
        <div className="flex items-center justify-center flex-col space-y-4">
          <div className="relative flex w-full flex-col items-start gap-6 self-stretch">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 ">
              {getFilteredCards().map((card) => (
                <a
                  key={card.title}
                  href={card.url}
                  target="_blank"
                  className="outline-primary-600 dark:outline-primary-500 group hover:border-primary-600 dark:hover:border-primary-500 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-50 outline-offset-2 focus:outline-2 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-center gap-6 p-4">
                    <div className="flex flex-1 items-center gap-2">
                      {/* <div className="size-9">{card.icon}</div> */}

                      <div className="flex flex-1 flex-col items-start justify-center gap-1.5 border-l border-gray-200 pl-3.5 dark:border-gray-700">
                        <div className="w-full font-sans text-lg leading-4 font-semibold text-gray-900 dark:text-gray-200">
                          {card.title}
                        </div>

                        <div className="w-full font-sans text-sm leading-5 font-normal text-gray-500 dark:text-gray-400">
                          {card.description}
                        </div>
                      </div>
                    </div>

                    <svg
                      width="24"
                      height="24" 
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-500 h-6 w-6 text-gray-500 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L14.2929 8.70711C13.9024 8.31658 13.9024 7.68342 14.2929 7.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Link to= "" role="status" className="fixed bottom-7 right-6 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-800 hover:bg-gray-200 dark:bg-blue-700 dark:text-white dark:hover:dark:hover:bg-gray-700">
        <div>
            <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
            </svg>
         </div>
        <span>RETURN TO HOME</span>
      </Link>
      </main>
    </div>
  );
}

export default Home;