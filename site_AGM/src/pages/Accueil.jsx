import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSlider from "../components/HeroSlider";
import Collaborateurs from "../components/Collaborateurs";

export default function Accueil() {
  return (
    <Box>
      <HeroSlider />
      <Collaborateurs />
    </Box>
  );
}
