import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, IconButton, Flex } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import AGM_sary from '../assets/images/sary/AGM_sary.jpg';
import AGM_sary_2 from '../assets/images/sary/AGM_sary_2.jpg';
import AGM_sary_3 from '../assets/images/sary/AGM_sary_3.jpg';

const slides = [
  {
    image: AGM_sary,
    title: "Bienvenue à l'Association Géomatique Malagasy",
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

const YOUTUBE_BG = "https://www.youtube.com/embed/KpEkFjMoKsM?autoplay=1&mute=1&controls=0&loop=1&playlist=KpEkFjMoKsM&modestbranding=1&showinfo=0&rel=0";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const nextSlide = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const slide = slides[index];

  return (
    <Box as="section"
      bgImage={`url(${slide.image})`} // background dynamique selon le slide courant
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      py={{ base: 10, md: 20 }}
      px={4}
      textAlign="center"
      position="relative"
      overflow="hidden"
    >
      <Flex justify="center" align="center" position="relative" zIndex={2} minH={{ base: "300px", md: "400px" }}>
        <IconButton
          icon={<ArrowBackIcon boxSize={6} />}
          aria-label="Précédent"
          onClick={prevSlide}
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={3}
          bg="white"
          color="primary.700"
          _hover={{ bg: "primary.100" }}
          size="lg"
        />
        <Box w="full">
          <Stack spacing={6} align="center">
            <Heading as="h1" size="2xl" color="white" textShadow="0 2px 8px #000, 0 0 2px #000">
              {slide.title}
            </Heading>
            <Text fontSize="xl" maxW="2xl" color="white" textShadow="0 2px 8px #000, 0 0 2px #000">
              {slide.text}
            </Text>
            <Button colorScheme="primary" size="lg" as="a" href={slide.button.href}>
              {slide.button.label}
            </Button>
          </Stack>
        </Box>
        <IconButton
          icon={<ArrowForwardIcon boxSize={6} />}
          aria-label="Suivant"
          onClick={nextSlide}
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={3}
          bg="white"
          color="primary.700"
          _hover={{ bg: "primary.100" }}
          size="lg"
        />
      </Flex>
    </Box>
  );
}
