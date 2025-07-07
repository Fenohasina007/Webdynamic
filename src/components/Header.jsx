import React from "react";
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import agmImage from '../assets/images/AGM.jpg';

const Links = [
  { name: "accueil", to: "/" },
  { name: "a propos", to: "/a-propos" },
  { name: "formation", to: "/formations" },
  { name: "actualites", to: "/actualites" },
  { name: "membres", to: "/membres" },
  { name: "service", to: "/services" }
];

const NavLink = ({ to, children, onClick }) => (
  <Link
    as={RouterLink}
    to={to}
    color="white"
    fontWeight="bold"
    fontSize="sm"
    textTransform="lowercase"
    px={2}
    py={1}
    className="navbar-link"
    _hover={{ color: "#1976d2", bg: "white" }}
    onClick={onClick}
    textAlign="center"
    width="100%"
    position="relative"
    style={{ transition: 'color 0.3s' }}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify="center" align="center" position="sticky" top={0} left={0} w="100vw" zIndex={1200} bg="transparent">
      <Box
        bg="#3dbbeb"
        borderRadius="full"
        px={{ base: 1, sm: 2, md: 6, lg: 10, xl: 14 }}
        py={{ base: 1, md: 1 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="lg"
        width={{ base: "100vw", md: "100vw" }}
        maxW={{ base: '100vw', md: '100vw', xl: '1000px' }}
        minW={0}
        position="relative"
      >

        
        <Box mr={2} minW="36px" display="flex" alignItems="center">
          <Image src={agmImage} alt="AGM" boxSize={{ base: "32px", sm: "36px", md: "40px" }} borderRadius="full" />
        </Box>
        


        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Ouvrir le menu"
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="transparent"
          _hover={{ bg: "white", color: "#3dbbeb" }}
          mr={1}
        />
        {/* Liens desktop centrés à droite du logo */}
        <HStack spacing={0} display={{ base: "none", md: "flex" }} justify="center" align="center" w="100%">
          <NavLink to={Links[0].to}>{Links[0].name}</NavLink>
          <Box color="white" fontWeight="bold" px={2}>|</Box>
          <NavLink to={Links[1].to} whiteSpace="nowrap">{Links[1].name}</NavLink>
          <Box color="white" fontWeight="bold" px={2}>|</Box>
          <NavLink to={Links[2].to}>{Links[2].name}</NavLink>
          <Box color="white" fontWeight="bold" px={2}>|</Box>
          <NavLink to={Links[3].to}>{Links[3].name}</NavLink>
          <Box color="white" fontWeight="bold" px={2}>|</Box>
          <NavLink to={Links[4].to}>{Links[4].name}</NavLink>
          <Box color="white" fontWeight="bold" px={2}>|</Box>
          <NavLink to={Links[5].to}>{Links[5].name}</NavLink>
        </HStack>
        {/* Menu mobile overlay */}
        {isOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            bg="#3dbbeb"
            zIndex={100}
            pt={24}
            px={4}
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
          >
            {Links.map((link) => (
              <NavLink key={link.name} to={link.to} onClick={onClose}>
                {link.name}
              </NavLink>
            ))}
          </Box>
        )}
      </Box>
    </Flex>
  );
}
