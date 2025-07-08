import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function CardActualite({ titre, date, extrait }) {
  return (
    <Box
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      p={6}
      _hover={{ boxShadow: "xl", transform: "translateY(-4px) scale(1.02)" }}
      transition="all 0.2s"
    >
      <Stack spacing={2}>
        <Heading as="h3" size="md" color="primary.700">
          {titre}
        </Heading>
        <Text fontSize="sm" color="gray.500">{date}</Text>
        <Text>{extrait}</Text>
        <Button colorScheme="primary" variant="outline" size="sm">
          Lire la suite
        </Button>
      </Stack>
    </Box>
  );
}
