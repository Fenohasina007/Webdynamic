import React from "react";
import { Container, Heading, Box, Stack } from "@chakra-ui/react";
import HeroSlider from "../components/HeroSlider";
import HorizontalScroller from "../components/HorizontalScroller";
import EquipeSection from "../components/EquipeSection";

export default function Accueil() {
  return (
    <Box>
      <HeroSlider />
      <HorizontalScroller />
      <Container maxW="6xl" py={10}>
        <Stack spacing={10}>
          <Box as="section" id="equipe" display={{ base: 'block', md: 'flex' }} alignItems="center" justifyContent="center" gap={{ base: 8, md: 16, lg: 24 }}>
            <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" pr={{ base: 0, md: 8, lg: 12 }}>
              <EquipeSection hideTitleAndText={true} />
            </Box>
            <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" pl={{ base: 0, md: 8, lg: 12 }}>
              <Heading as="h2" size="lg" mb={4} color="primary.700">
                L'équipe AGM
              </Heading>
              <Box color="primary.700" fontSize={{ base: "md", md: "lg" }}>
                L'Association Géomatique Malagasy a pour mission de promouvoir la géomatique à Madagascar, de former les professionnels et d'accompagner les projets innovants dans ce domaine.<br /><br />
                Nous réunissons des passionnés, étudiants, enseignants et experts pour partager les connaissances et développer des outils adaptés aux besoins locaux.
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
