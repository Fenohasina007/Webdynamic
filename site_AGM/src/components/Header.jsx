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
  { name: "service", to: "/services" },
];

const NavLink = ({ to, children, onClick, color = "white" }) => (
  <Link
    as={RouterLink}
    to={to}
    color={color}
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
    <Flex justify="center" align="center" w="100%" zIndex={1200} bg="transparent">
      <Box
        bg="#3dbbeb"
        borderRadius={{ base: 'md', md: 'full' }}
        px={2}
        py={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="lg"
        width="100%"
        maxW={{ base: '100vw', md: '700px', xl: '900px' }}
        minW={0}
        position="relative"
        mx="auto"
        transition="all 0.3s"
      >
        <Box mr={2} minW="36px" display={{ base: isOpen ? "none" : "flex", md: "flex" }} alignItems="center">
          <Image
            src={agmImage}
            alt="AGM"
            boxSize={{ base: "32px", md: "40px", lg: "48px" }}
            borderRadius="full"
            display="block"
          />
        </Box>
        {/* Espace réservé pour garder la place du logo quand il est caché en mobile */}
        {isOpen && (
          <Box mr={2} minW="36px" display={{ base: "flex", md: "none" }} />
        )}
        {/* Bouton menu hamburger toujours visible sur mobile */}
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
          {Links.map((link, idx) => (
            <React.Fragment key={link.name}>
              <NavLink to={link.to}>{link.name}</NavLink>
              {idx < Links.length - 1 && (
                <Box color="white" fontWeight="bold" px={2}>|</Box>
              )}
            </React.Fragment>
          ))}
        </HStack>
        {/* Menu mobile overlay */}
        {isOpen && (
          <Box
            position="fixed"
            top="70px"
            left="50%"
            transform="translateX(-50%)"
            width="95vw"
            maxW="400px"
            height="auto"
            bg="white"
            zIndex={100}
            pt={8}
            pb={8}
            px={6}
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            borderRadius="xl"
            boxShadow="2xl"
            transition="all 0.3s"
          >
            {Links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={onClose}
                color="black"
                style={{
                  background: 'white',
                  width: '100%',
                  height: '50px',
                  margin: '14px 0',
                  borderRadius: '8px',
                  padding: '16px 0',
                  fontWeight: 700,
                  fontSize: '1.25em',
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.04)'
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </Box>
        )}
      </Box>
    </Flex>
  );
}
