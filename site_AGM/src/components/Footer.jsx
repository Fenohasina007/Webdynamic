import React from "react";
import { Box, Flex, Text, Link, Stack, HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" bg="#3dbbeb" color="white" pt={12} pb={4} mt={10} fontFamily="'Times New Roman', Times, serif">
      <Box maxW="7xl" mx="auto" px={6}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={8}>
          {/* Contact */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Contact</Text>
            <Text fontSize="md">EMIT Université de Fianarantsoa<br />Madagascar</Text>
            <Text fontSize="md" mt={2}><strong>Téléphone:</strong> +261 34 43 083 35</Text>
            <Text fontSize="md"><strong>Email:</strong> <Link href="mailto:assogeomaticiensmalagasy@gmail.com" color="white" _hover={{ color: '#113f87' }}>assogeomaticiensmalagasy@gmail.com</Link></Text>
            <HStack spacing={3} mt={3} justify={{ base: "center", md: "flex-start" }}>
              <Link href="https://m.facebook.com/people/Association-des-G%C3%A9omaticiens-Malagasy/61554321442152/" isExternal aria-label="Facebook"><Icon as={FaFacebook} boxSize={6} _hover={{ color: '#113f87' }} /></Link>
              <Link href="https://mg.linkedin.com/in/association-des-g%C3%A9omaticiens-malagasy-agm-b094992a6?trk=public_post_feed-actor-name" isExternal aria-label="LinkedIn"><Icon as={FaLinkedin} boxSize={6} _hover={{ color: '#113f87' }} /></Link>
            </HStack>
          </Box>
          {/* Liens utiles */}
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Liens utiles</Text>
            <Stack as="ul" spacing={1} pl={0} fontSize="md">
              <li><Link href="/" color="white" _hover={{ color: '#113f87' }}>Accueil</Link></li>
              <li><Link href="/a-propos" color="white" _hover={{ color: '#113f87' }}>A propos</Link></li>
              <li><Link href="/services" color="white" _hover={{ color: '#113f87' }}>Services</Link></li>
              <li><Link href="/membres" color="white" _hover={{ color: '#113f87' }}>Equipes</Link></li>
            </Stack>
          </Box>
          {/* Services */}
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Nos services</Text>
            <Stack as="ul" spacing={1} pl={0} fontSize="md">
              <li><Link href="/formations" color="white" _hover={{ color: '#113f87' }}>Formations en géomatique</Link></li>
              <li><Link href="/actualites" color="white" _hover={{ color: '#113f87' }}>Publications de recherches</Link></li>
              <li><Link href="/actualites" color="white" _hover={{ color: '#113f87' }}>Sensibilisation</Link></li>
              <li><Link href="/actualites" color="white" _hover={{ color: '#113f87' }}>Collaboration</Link></li>
            </Stack>
          </Box>
        </SimpleGrid>
        <Box borderTop="1px solid #113f87" pt={4} textAlign="center">
          <Text fontSize="md" color="white">
            &copy; Copyright <strong><span>AGM</span></strong>. All Rights Reserved
          </Text>
          <Text fontSize="sm" color="white">
            Designed by <Link href="http://ericafenosoa.rf.gd" isExternal color="white">Fenosoa Erica</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
