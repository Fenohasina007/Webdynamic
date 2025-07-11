import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

const items = [
  "Lancement du SIG 2025",
  "Nouvelle formation Python-GIS",
  "Partenariat avec l'Université de Fianarantsoa",
  "Atelier télédétection à venir",
  "Ouverture des inscriptions 2025",
  "Conférence Géomatique Malagasy"
];

export default function HorizontalScroller() {
  return (
    <Box
      overflow="hidden"
      width="100%"
      bg="primary.700"
      py={3}
      position="relative"
      mt={10}
      mb={4}
      boxShadow="md"
    >
      <Box
        as="div"
        display="inline-block"
        whiteSpace="nowrap"
        style={{
          animation: "marquee 30s linear infinite"
        }}
      >
        <HStack spacing={16} as="span">
          {items.concat(items).map((item, idx) => (
            <Text
              key={idx}
              color="white"
              fontWeight="bold"
              fontSize="lg"
              px={4}
              py={2}
              bg="primary.800"
              borderRadius="md"
              boxShadow="sm"
              minW="220px"
              textAlign="center"
            >
              {item}
            </Text>
          ))}
        </HStack>
      </Box>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
