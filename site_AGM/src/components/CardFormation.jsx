import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Input, Select, RadioGroup, Radio, HStack, Alert, AlertIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function CardFormation({ titre, description, delay = 0 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', tel: '', paiement: '', montant: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleRadio = v => setForm({ ...form, paiement: v });

  const handleNext = e => {
    e.preventDefault();
    setStep(2);
  };
  const handlePay = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => { setSuccess(false); onClose(); setStep(1); }, 2000);
  };

  return (
    <>
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        bg="white"
        boxShadow="2xl"
        borderRadius="2xl"
        p={7}
        textAlign="center"
        border="1px solid #e2e8f0"
        whileHover={{
          scale: 1.04,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        style={{ cursor: "pointer", transition: "all 0.25s" }}
      >
        <Stack spacing={4} align="center">
          <Heading as="h3" size="md" color="primary.700" fontWeight="bold" mb={2}>
            {titre}
          </Heading>
          <Box w="40px" h="4px" bg="primary.700" borderRadius="full" mb={2}></Box>
          <Text color="gray.700" fontSize="md" mb={3}>
            {description}
          </Text>
          <Button colorScheme="teal" variant="solid" size="md" borderRadius="full" px={8} fontWeight="bold" onClick={onOpen} bg="#3dbbeb" _hover={{ bg: "#1976d2" }}>
            S'inscrire
          </Button>
        </Stack>
      </MotionBox>
      <Modal isOpen={isOpen} onClose={() => {onClose(); setStep(1);}} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalHeader color="primary.700">Inscription à la formation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {success && <Alert status="success" mb={4}><AlertIcon />Paiement effectué avec succès !</Alert>}
            {step === 1 && (
              <form onSubmit={handleNext}>
                <Stack spacing={4}>
                  <Input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} required />
                  <Input name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} required />
                  <Input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
                  <Input name="tel" placeholder="Numéro de téléphone" value={form.tel} onChange={handleChange} required />
                  <Button colorScheme="blue" borderRadius="full" type="submit">Suivant</Button>
                </Stack>
              </form>
            )}
            {step === 2 && (
              <form onSubmit={handlePay}>
                <Stack spacing={4}>
                  <RadioGroup onChange={handleRadio} value={form.paiement}>
                    <Text fontWeight="bold" mb={2}>Mode de paiement</Text>
                    <HStack spacing={6}>
                      <Radio value="mvola">MVola</Radio>
                      <Radio value="orange-money">Orange Money</Radio>
                      <Radio value="carte">Carte bancaire</Radio>
                    </HStack>
                  </RadioGroup>
                  <Input name="montant" placeholder="Montant (Ar)" type="number" value={form.montant} onChange={handleChange} required />
                  <Button colorScheme="teal" borderRadius="full" type="submit">Payer</Button>
                  <Button variant="ghost" borderRadius="full" onClick={() => setStep(1)}>Retour</Button>
                </Stack>
              </form>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
