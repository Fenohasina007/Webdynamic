import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Formations from "./pages/Formations";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import BlueGlowBar from "./components/BlueGlowBar";
import { Box, Flex, Image } from "@chakra-ui/react";
import ScrollToTop from "./components/ScrollToTop"; 
import agmImage from './assets/images/AGM.jpg';
import sary from "./assets/images/sary/AGM_sary.jpg"; // Importer l'image AGM_sary.jpg
import './hide-scrollbar.css';
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Box display="flex" alignItems="center" mb={2}>
        {/* Logo AGM visible seulement sur desktop */}
        <Box position="relative" w="110px" h="110px" mr={6} minW="110px" display={{ base: "none", md: "flex" }}>
          <Image
            src={agmImage}
            alt="AGM"
            boxSize="92px"
            borderRadius="full"
            position="absolute"
            top="15px"
            left="15px"
            zIndex={2}
            border="none"
            style={{ border: 'none' }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            w="110px"
            h="110px"
            zIndex={1}
            pointerEvents="none"
          >
            <svg width="123" height="123" viewBox="0 0 110 110">
              <defs>
                <path
                  id="circlePath"
                  d="M55,55 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                />
              </defs>
              <g>
                <text
                  fontSize="11"
                  fill="#3dbbeb"
                  fontWeight="bold"
                  letterSpacing="2px"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    Association Géomatique Malagasy • Association Géomatique
                    Malagasy •
                  </textPath>
                </text>
              </g>
            </svg>
          </Box>
        </Box>
        {/* Header à droite du logo */}
        <Box flex="1">
          <Header />
        </Box>
      </Box>
      <ScrollToTop />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <BlueGlowBar />
      <BackToTopButton />
      <Footer />
    </Flex>
  );
}

export default App;
