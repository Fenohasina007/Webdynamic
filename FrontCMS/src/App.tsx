import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('http://localhost:3000/test-connection')
      .then(response => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la connexion:', error);
        setMessage('Erreur lors de la connexion au backend.');
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
        <h2>Test de Connexion</h2>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
