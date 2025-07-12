import React from "react";
import { Box, Flex, HStack, Link, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import '../navbar-underline.css';

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
    fontSize="md"
    textTransform="lowercase"
    px={2}
    py={1}
    className="navbar-link"
    _hover={{}}
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
    <Flex justify="center" align="center" w="100%" zIndex={1200} bg="transparent" py={3}>
      <Box
        bg="#1976d2"
        borderRadius="2xl"
        px={2}
        py={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="lg"
        width="95vw"
        maxW="1100px"
        minW={0}
        position="relative"
        mx="auto"
        transition="all 0.3s"
      >
        {/* Logo supprimé */}
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
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="#3dbbeb"
            zIndex={100}
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="0"
            boxShadow="2xl"
            transition="all 0.3s"
          >
            {Links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={onClose}
                color="white"
                style={{
                  background: 'transparent',
                  width: '100%',
                  height: '64px',
                  margin: '18px 0',
                  borderRadius: '8px',
                  padding: '20px 0',
                  fontWeight: 700,
                  fontSize: '1.5em',
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                  boxShadow: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
