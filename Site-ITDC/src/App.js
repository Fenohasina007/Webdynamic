import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
