import Header from './components/Header';

export default function About() {
  return (
    <>
      <Header />

      {/* Intro Services */}
      <section className="bg-bleuIt text-white pt-28 pb-12 px-6 sm:px-10 lg:px-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Brève description de notre établissement</h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg font-light">
          Depuis 2017, ITDC Mada accompagne les entreprises malgaches dans leur transformation digitale et dans la valorisation de leurs données environnementales grâce à des solutions sur mesure et innovantes.
        </p>
      </section>

      {/* Notre Mission */}
      <section className="bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6f0ff] py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="w-14 h-1 bg-itdc mx-auto mb-6 rounded-full shadow-sm"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bleuIt mb-6 uppercase tracking-wide">
            Notre Mission
          </h2>
          <blockquote className="bg-white border-l-4 border-itdc shadow-md rounded-lg p-6 sm:p-10 text-gray-800 font-light text-lg sm:text-xl italic relative">
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-itdc text-4xl font-serif">“</span>
            <p className="z-10 relative">
              Accompagner durablement les entreprises de Madagascar dans leur transformation numérique et l’exploitation intelligente de leurs données environnementales.
            </p>
            <span className="absolute -bottom-6 right-1/2 transform translate-x-1/2 text-itdc text-4xl font-serif">”</span>
          </blockquote>
        </div>
      </section>

      {/* Notre Engagement */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="w-14 h-1 bg-bleuIt mx-auto mb-6 rounded-full shadow-sm"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-itdc mb-6 uppercase tracking-wide">
            Notre Engagement
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm px-6 sm:px-10 py-8 text-gray-700 text-base sm:text-lg font-light leading-relaxed">
            Nous nous engageons à fournir des solutions personnalisées, innovantes et durables, parfaitement alignées avec les enjeux réels des entreprises locales. Notre objectif est de contribuer activement à un développement numérique responsable à Madagascar, avec un accompagnement de proximité et une écoute constante.
          </div>
        </div>
      </section>


      {/* Section Notre Parcours */}
      <section className="bg-grisFond py-16 px-6 sm:px-10 lg:px-24 mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-bleuIt text-center mb-4">Notre Parcours depuis 2017</h2>
          <p className="text-center text-lg text-gray-700 font-light mb-12">
            Notre parcours depuis notre création reflète notre engagement envers l'innovation et le développement durable.
          </p>

          <div className="relative border-l-4 border-itdc pl-6 space-y-12">
            <div className="relative">
              <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-itdc border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-bleuIt mb-2">La création</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Fondée en 2017 à Fianarantsoa, ITDC Mada est née d'une vision commune de mettre l'informatique au service du développement des entreprises et de la protection de l'environnement à Madagascar. Depuis nos débuts, nous avons constamment évolué pour répondre aux besoins changeants du marché, en développant une expertise pointue dans le développement d'applications et l'analyse de données environnementales.
              </p>
            </div>

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

      {/* Section Nos Valeurs */}
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
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-itdc">1</div>
              <div>
                <h3 className="text-xl font-semibold text-bleuIt mb-1">Innovation</h3>
                <p className="text-gray-700 font-light">
                  Être à la pointe des technologies pour proposer des solutions créatives et efficaces.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-itdc">2</div>
              <div>
                <h3 className="text-xl font-semibold text-bleuIt mb-1">Qualité</h3>
                <p className="text-gray-700 font-light">
                  Fournir des services et des produits fiables et durables.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-itdc">3</div>
              <div>
                <h3 className="text-xl font-semibold text-bleuIt mb-1">Proximité</h3>
                <p className="text-gray-700 font-light">
                  Établir des relations de confiance et un accompagnement personnalisé avec nos clients.
                </p>
              </div>
            </div>

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
    </>
  );
}
