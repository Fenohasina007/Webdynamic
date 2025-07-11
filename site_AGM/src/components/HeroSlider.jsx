import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Flex } from "@chakra-ui/react";
// Importer les images
import AGM_sary from '../assets/images/sary/AGM_sary.jpg';
import AGM_sary_2 from '../assets/images/sary/AGM_sary_2.jpg';
import AGM_sary_3 from '../assets/images/sary/AGM_sary_3.jpg';

const slides = [
  {
    image: AGM_sary,
    title: "Bienvenue à l'Association Géomaticiens Malagasy",
    text: "Promouvoir la géomatique et les technologies innovantes à Madagascar. Découvrez nos formations, actualités et projets !",
    button: { label: "Découvrir l'association", href: "#formations" }
  },
  {
    image: AGM_sary_2,
    title: "Formations innovantes",
    text: "Des programmes adaptés à tous les niveaux, animés par des experts du secteur.",
    button: { label: "Voir les formations", href: "/formations" }
  },
  {
    image: AGM_sary_3,
    title: "Actualités & Événements",
    text: "Suivez nos ateliers, conférences et nouveautés en géomatique à Madagascar.",
    button: { label: "Voir les actualités", href: "/actualites" }
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <Box as="section"
      position="relative"
      py={{ base: 10, md: 20 }}
      px={4}
      textAlign="center"
      overflow="hidden"
      minH={{ base: "300px", md: "400px" }}
    >
      {/* Image de fond avec effet flou */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={1}
        backgroundImage={`url(${slide.image})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        filter="blur(6px) brightness(0.7)"
        transition="background-image 0.5s"
      />
      <Flex justify="center" align="center" position="relative" zIndex={2} minH={{ base: "300px", md: "400px" }}>
        <Box w="full">
          <Stack spacing={6} align="center">
            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} color="white" textShadow="0 2px 8px #000, 0 0 2px #000">
              {slide.title}
            </Heading>
            <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} maxW="2xl" color="white" textShadow="0 2px 8px #000, 0 0 2px #000">
              {slide.text}
            </Text>
            <Button colorScheme="primary" size="lg" as="a" href={slide.button.href}>
              {slide.button.label}
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
