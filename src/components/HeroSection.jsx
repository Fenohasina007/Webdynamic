import React from "react";
import { Box, Heading, Text, Button, Stack, Image } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box as="section" bg="primary.50" py={{ base: 10, md: 20 }} px={4} textAlign="center">
      <Stack spacing={6} align="center">
        <Image src="/assets/images/geomatique-hero.png" alt="Géomaticiens Malagasy" boxSize="180px" objectFit="contain" mb={4} />
        <Heading as="h1" size="2xl" color="primary.700">
          Bienvenue à l'Association Géomaticiens Malagasy
        </Heading>
        
        <Text fontSize="xl" maxW="2xl">

        
          Promouvoir la géomatique et les technologies innovantes à Madagascar.
          Découvrez nos formations,
          actualités et projets !Merci de nous rejoindre dans cette aventure passionnante.

        </Text>

        <Button colorScheme="primary" size="lg" as="a" href="#formations">
          Découvrir l'association
        </Button>
      </Stack>
    </Box>
  );
}
