import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
