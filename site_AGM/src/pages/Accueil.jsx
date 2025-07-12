import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSlider from "../components/HeroSlider";
import HorizontalScroller from "../components/HorizontalScroller";

export default function Accueil() {
  return (
    <Box>
      <HeroSlider />
      <HorizontalScroller />
    </Box>
  );
}
