import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil !</h1>
      <p>Ceci est la page principale de votre application.</p>
      <Link to="/contact">Aller à la page Contact</Link>
      <Link to="/">Aller à la page d'acceuil</Link>
    </div>
  );
}

export default Home;