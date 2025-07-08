import { extendTheme } from "@chakra-ui/react";

// Palette inspirée de ton index.html, à ajuster selon tes couleurs
const colors = {
  primary: {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: { base: "#1565c0", dark: "#181818" },
    900: { base: "#0d47a1", dark: "#000" }
  },
  secondary: {
    500: "#43a047"
  }
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif"
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        backgroundImage: "url('../assets/images/AGM.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "#222"
      }
    }
  }
});

export default theme;
