import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';

// Define interfaces based on your entity structure
interface Personnalisation {
  idPersonnalisation: number;
  Size: string;
  Weight: string;
  TextFamily: string;
  Couleur: string;
  Background: string;
  MarginTop: number;
  MarginBottom: number;
  MarginLeft: number;
  MarginRight: number;
  PaddingTop: number;
  PaddingBottom: number;
  PaddingLeft: number;
  PaddingRight: number;
  idContenu: number;
}

interface Contenu {
  idContenu: number;
  Type: string;
  Ordre: string;
  ContenuJSON: string;
  idComposante: number;
  personnalisations: Personnalisation[];
}

interface Composante {
  idComposante: number;
  NomComposante: string;
  NomPage: string;
  idSite: number;
  contenus: Contenu[];
}

interface Site {
  idSite: number;
  NomSite: string;
  Domaine: string;
  composantes: Composante[];
}

function App() {
  const [count, setCount] = useState(0);
  const [siteData, setSiteData] = useState<Site | { message: string } | null>(null); // Typed with union type
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/site-data/ITDC/Accueil')
      .then(response => {
        setSiteData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la connexion:', error);
        setSiteData({ message: 'Erreur lors de la connexion au backend.' });
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>Données du Site</h2>
        {siteData && 'message' in siteData ? (
          <p>{siteData.message}</p>
        ) : siteData ? (
          <div>
            <h3>Site: {siteData.NomSite}</h3>
            {siteData.composantes.map((composante) => (
              <div key={composante.idComposante}>
                <p>Nom: {composante.NomComposante} (Page: {composante.NomPage})</p>
                {composante.contenus.map((contenu) => (
                  <div key={contenu.idContenu}>
                    <p>Type: {contenu.Type}</p>
                    <p>Contenu: {JSON.stringify(contenu.ContenuJSON)}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;