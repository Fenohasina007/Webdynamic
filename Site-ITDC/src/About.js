import Header from './components/Header';
import Footer from './components/Footer';

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
      <section className="bg-grisFond pb-20 pt-16 px-6 sm:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-bleuIt text-center mb-4">Notre Parcours depuis 2017</h2>
          <p className="text-center text-lg text-gray-700 font-light mb-12">
            Depuis sa création, ITDC Mada s'engage à innover en faveur du développement durable et du progrès numérique.
          </p>

          <div className="relative border-l-4 border-itdc pl-6 space-y-12">
            <div className="relative">
              <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-itdc border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-bleuIt mb-2">La création</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Fondée en 2017 à Fianarantsoa, ITDC Mada est née d'une ambition partagée : mettre le numérique au service de la croissance économique et de la préservation de l'environnement. Depuis, notre structure n'a cessé d'évoluer pour répondre avec précision aux enjeux technologiques locaux.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-itdc border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-bleuIt mb-2">Notre évolution</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Grâce à notre engagement et à la confiance de nos partenaires, nous avons réalisé de nombreux projets à fort impact. Notre équipe grandit, se forme et renforce chaque jour son expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bleuIt mb-4">Nos Valeurs</h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light mb-6">
            Les piliers qui structurent notre travail et orientent nos choix au quotidien.
          </p>
          <p className="italic text-itdc text-base sm:text-lg font-medium mb-12">
            "Nos valeurs sont notre boussole : elles nous guident dans chaque projet."
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {[
              { id: 1, title: 'Innovation', desc: 'Proposer des solutions modernes et audacieuses pour rester à l’avant-garde.' },
              { id: 2, title: 'Qualité', desc: 'Livrer des produits fiables, performants et pérennes.' },
              { id: 3, title: 'Proximité', desc: 'Créer une relation humaine et de confiance avec chaque client.' },
              { id: 4, title: 'Expertise', desc: 'Capitaliser sur notre savoir-faire technique et sectoriel.' }
            ].map(({ id, title, desc }) => (
              <div key={id} className="flex items-start gap-4">
                <div className="text-3xl font-bold text-itdc">{id}</div>
                <div>
                  <h3 className="text-xl font-semibold text-bleuIt mb-1">{title}</h3>
                  <p className="text-gray-700 font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages de Collaborer */}
      <section className="bg-[#f9fafb] py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 flex flex-col justify-start">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-bleuIt mb-4">
              Les Avantages de Collaborer avec Nous
            </h2>
            <div className="w-16 h-1 bg-itdc mb-6"></div>
            <p className="text-gray-600 text-base font-light mb-8">
              Découvrez les raisons qui font de nous le partenaire idéal pour vos projets.
            </p>
            <a
              href="tel:+261345263787"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm text-white bg-[#00aef0] rounded hover:bg-[#018ccc] transition-all duration-300 shadow-md"
            >
              Contactez-nous →
            </a>
          </div>

          <div className="lg:col-span-2 space-y-10">
            {[
              {
                title: "Une forte compétence dans la collecte et l’analyse de données spatiales et tabulaires pour le domaine environnemental.",
                desc: "Une forte compétence dans la collecte et l'analyse de données spatiales et tabulaires pour le domaine environnemental."
              },
              {
                title: "Une compréhension approfondie des enjeux des entreprises à Madagascar, notamment à Fianarantsoa.",
                desc: "Une compréhension approfondie des enjeux des entreprises à Madagascar, notamment à Fianarantsoa.",
                extras: [
                  "Application personnalisée à votre contexte",
                  "Résultats rapides et mesurables"
                ]
              },
              {
                title: "Des solutions personnalisées qui répondent précisément à vos besoins.",
                desc: "Des solutions personnalisées qui répondent précisément à vos besoins."
              },
              {
                title: "Un engagement envers l’innovation et l’utilisation des technologies les plus récentes.",
                desc: "Un engagement envers l’innovation et l’utilisation des technologies les plus récentes."
              },
              {
                title: "Une entreprise fondée en 2017 avec une solide expérience.",
                desc: "Une entreprise fondée en 2017 avec une solide expérience."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white shadow-md border border-itdc text-itdc transition-all duration-300 group-hover:scale-105">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bleuIt mb-1">{item.title}</h3>
                  <p className="text-gray-700 font-light">{item.desc}</p>
                  {item.extras && (
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                      {item.extras.map((extra, i) => (
                        <li key={i}>{extra}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}