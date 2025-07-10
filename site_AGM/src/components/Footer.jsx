import React from "react";
import { Box, Text, Stack, Link, HStack, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="#113f87" color="white" py={8} mt={10}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" maxW="7xl" mx="auto" px={6}>
        {}
        <Flex align="flex-start" direction="column" mb={{ base: 6, md: 0 }}>
          <Flex align="center" mb={3} gap={2}>
            <img
              src={require("../assets/images/AGM.jpg")}
              alt="Logo Association Géomatique Malagasy"
              style={{ height: 28, width: 28, borderRadius: "50%", objectFit: "cover" }}
            />
            <Text fontWeight="bold" fontSize="lg">Association Géomatique Malagasy</Text>
          </Flex>
          <Text fontSize="sm">BP 1264 Andrainjato | 301 – Fianarantsoa</Text>
          <Text fontSize="sm">(+261) 20 75 508 02 | (+261) 20 75 513 25</Text>
          <Link href="mailto:assogeomaticiensmalagasy@gmail.com" color="white" fontSize="sm" _hover={{ textDecoration: "underline", color: "#90caf9" }}>
            assogeomaticiensmalagasy@gmail.com
          </Link>
        </Flex>
        

        
        <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
          <Link href="/" color="white" fontWeight="medium" _hover={{ color: "#90caf9" }}>Accueil</Link>
          <Link href="/actualites" color="white" fontWeight="medium" _hover={{ color: "#90caf9" }}>Actualités</Link>
          <Link href="/contact" color="white" fontWeight="medium" _hover={{ color: "#90caf9" }}>Contact</Link>
        </Stack>
        
        <Text fontSize="sm" color="white" mt={{ base: 6, md: 0 }} textAlign={{ base: "center", md: "right" }}>
          &copy; {new Date().getFullYear()} Association Géomaticiens Malagasy. Tous droits réservés.
        </Text>
      </Flex>
    </Box>
  );
}
