import React, { useState, useEffect } from "react";
import { Container, Heading, Text, Stack, Box, SimpleGrid, Icon, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: "EMIT Andrainjato",
    text: "Université de Fianarantsoa"
  },
  {
    icon: EmailIcon,
    title: "Email",
    text: "assogeomaticiensmalagasy@gmail.com"
  },
  {
    icon: PhoneIcon,
    title: "Téléphone",
    text: "+261 34 43 083 35"
  }
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Contact() {
  const [items, setItems] = useState(contactItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => shuffleArray(prev));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxW="6xl" py={10}>
      <Stack spacing={10}>
        <Heading as="h1" size="xl" color="primary.700">Contact</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <AnimatePresence initial={false}>
            {items.map((item, idx) => {
              const delay = 0.1 + idx * 0.15;
              return (
                <Box
                  as={motion.div}
                  key={item.title}
                  bg="white"
                  boxShadow="md"
                  borderRadius="lg"
                  p={6}
                  textAlign="center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay }}
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0 8px 32px rgba(33,150,243,0.18)",
                    y: -8
                  }}
                  cursor="pointer"
                  _focus={{ outline: "none", boxShadow: "outline" }}
                >
                  <Icon as={item.icon} w={8} h={8} color="primary.700" mb={2} />
                  <Heading as="h3" size="md" mb={1}>{item.title}</Heading>
                  <Text>{item.text}</Text>
                </Box>
              );
            })}
          </AnimatePresence>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="start">
          <Box>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <iframe
                title="EMIT Andrainjato Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.1206285107864!2d47.10737227465444!3d-21.463782987897012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7bf3a518ca787%3A0x60d947c35b7c1085!2sEMIT%20(Ecole%20de%20Management%20et%20d'Innovation%20Technologique)!5e0!3m2!1sfr!2sus!4v1710229239340!5m2!1sfr!2sus"
                width="100%"
                height="310"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
          <Box as="form" className="contact-form" bg="#fff" borderRadius="12px" boxShadow="0 2px 16px rgba(0,0,0,0.08)" p={{ base: 4, md: 8 }} w="100%" maxW="100%" mx="auto">
            <Stack spacing={6}>
              <FormControl id="nom">
                <FormLabel>Nom</FormLabel>
                <Input type="text" required border="1px solid #e0e0e0" borderRadius="6px" p={3} _focus={{ borderColor: '#3dbbeb', boxShadow: '0 0 0 1px #3dbbeb' }} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" required border="1px solid #e0e0e0" borderRadius="6px" p={3} _focus={{ borderColor: '#3dbbeb', boxShadow: '0 0 0 1px #3dbbeb' }} />
              </FormControl>
              <FormControl id="sujet">
                <FormLabel>Sujet</FormLabel>
                <Input type="text" required border="1px solid #e0e0e0" borderRadius="6px" p={3} _focus={{ borderColor: '#3dbbeb', boxShadow: '0 0 0 1px #3dbbeb' }} />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea rows={5} required border="1px solid #e0e0e0" borderRadius="6px" p={3} _focus={{ borderColor: '#3dbbeb', boxShadow: '0 0 0 1px #3dbbeb' }} />
              </FormControl>
              <Button type="submit" bg="#3dbbeb" color="#fff" borderRadius="6px" p={3} fontWeight="bold" _hover={{ bg: '#1a8bb8' }}>
                Envoyer
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
