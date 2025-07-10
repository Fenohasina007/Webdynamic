import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Acceuil from './pages/Acceuil';

function App() {
  return (
    <Router>
      <div>
        <nav>
        </nav>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;