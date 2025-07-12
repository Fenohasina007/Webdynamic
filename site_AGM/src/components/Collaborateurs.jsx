import React from "react";
import { Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";

const collaborateurs = [
  {
    nom: "Université de Fianarantsoa",
    logo: require("../assets/sary_atao_fond/LOGO UNIV.jpg"),
    site: "https://www.univ-fianarantsoa.mg/"
  },
  {
    nom: "EMIT",
    logo: require("../assets/sary_atao_fond/emit-logo.png"),
    site: "https://www.emit.mg/accueil"
  },
  {
    nom: "MADATLAS",
    logo: require("../assets/sary_atao_fond/madatlasOk.jpg"),
    site: "https://web.facebook.com/media/set/?set=a.252622427527406&type=3"
  },
];

export default function Collaborateurs() {
  return (
    <Box py={12} px={4} bg="#f7f7f7">
      <Heading as="h2" size="lg" color="#1976d2" textAlign="center" mb={8} fontWeight="extrabold">
        Nos Collaborateurs
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: collaborateurs.length }} spacing={8} maxW="5xl" mx="auto">
        {collaborateurs.map((c) => (
          <Box key={c.nom} bg="white" borderRadius="2xl" boxShadow="lg" p={6} textAlign="center" _hover={{ boxShadow: "2xl", transform: "translateY(-6px) scale(1.03)" }} transition="all 0.3s">
            <a href={c.site} target="_blank" rel="noopener noreferrer">
              <Image src={c.logo} alt={c.nom} maxH="80px" mx="auto" mb={4} />
              <Text fontWeight="bold" color="#1976d2">{c.nom}</Text>
            </a>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
