import React, { useState, useEffect } from "react";
import { IconButton, Fade } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={visible}>
      <IconButton
        icon={<ChevronUpIcon boxSize={7} />}
        aria-label="Remonter en haut"
        position="fixed"
        bottom={{ base: 6, md: 10 }}
        right={{ base: 6, md: 10 }}
        zIndex={1500}
        colorScheme="blue"
        bg="#3dbbeb"
        color="white"
        borderRadius="full"
        boxShadow="lg"
        size="lg"
        onClick={scrollToTop}
        _hover={{ bg: "#1976d2" }}
      />
    </Fade>
  );
}

//MILA ALEFA ANY @GITHUB KOU ITY
