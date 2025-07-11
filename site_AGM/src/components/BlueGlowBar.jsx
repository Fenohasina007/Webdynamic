import React from "react";
import { Box } from "@chakra-ui/react";

export default function BlueGlowBar() {
  return (
    <Box
      w="100%"
      h="10px"
      c="center"
      bgGradient="linear(to-r, #3dbbeb, #1976d2, #3dbbeb)"
      boxShadow="0 0 32px 8px #3dbbeb, 0 0 64px 16px #1976d2"
      position="fixed"
      left={0}
      bottom={0}
      zIndex={1400}
      style={{
        animation: "blueGlowMove 3s linear infinite"
      }}
      className="blue-glow-bar"
    />
  );
}
