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
          <Box as="section" id="equipe">
            <Heading as="h2" size="lg" mb={6} color="primary.700" textAlign="center">qsfdsfqdsf</Heading>
            <EquipeSection />
          </Box>
          
        </Stack>
      </Container>
    </Box>
  );
}
