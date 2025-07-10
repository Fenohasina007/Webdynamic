import Header from './components/Header';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

export default function About() {
  return (
    <>
      <Header />

      {/* Intro Services */}
      <section className="bg-bleuIt text-white pt-32 pb-12 px-6 sm:px-10 lg:px-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Services d'Accompagnement Numérique</h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg font-light">
          Chez ITDC Mada, nous proposons une gamme complète de services pour accompagner votre entreprise dans sa transformation numérique et la valorisation de ses données environnementales.
        </p>
      </section>

      {/* Section Notre Parcours */}
      <section className="bg-grisFond pb-20 pt-16 px-6 sm:px-10 lg:px-24">
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

            <div className="relative">
              <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-itdc border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-bleuIt mb-2">Notre mission</h3>
              <p className="text-gray-700 font-light leading-relaxed italic">
                "Accompagner les entreprises de Madagascar dans leur transformation numérique et valoriser leurs données environnementales grâce à des solutions informatiques innovantes et performantes."
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-itdc border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-bleuIt mb-2">Notre engagement</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Nous nous engageons à fournir des solutions personnalisées, innovantes et durables qui répondent aux enjeux réels des entreprises locales et contribuent au développement responsable de Madagascar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="bg-white  py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bleuIt mb-4">Nos Valeurs</h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light mb-6">
            Les principes qui guident chacune de nos décisions et actions au quotidien.
          </p>
          <p className="italic text-itdc text-base sm:text-lg font-medium mb-12">
            "Nos valeurs sont au cœur de notre identité et de notre approche."
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {[
              { id: 1, title: 'Innovation', desc: 'Être à la pointe des technologies pour proposer des solutions créatives et efficaces.' },
              { id: 2, title: 'Qualité', desc: 'Fournir des services et des produits fiables et durables.' },
              { id: 3, title: 'Proximité', desc: 'Établir des relations de confiance et un accompagnement personnalisé avec nos clients.' },
              { id: 4, title: 'Expertise', desc: 'Mettre à disposition notre savoir-faire dans les domaines du numérique et de l’environnement.' }
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
      <section>
        {/* SECTION Footer */}
        <Footer/>
      </section>
    </>
  );
}