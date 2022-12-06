import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const CustomTheme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
  palette: {
    
    background: {
      default: "#D6D6D6",
    },
    primary: {
      main: grey[600],
      fontFamily: "Ubuntu Condensed",
    },
    secondary: {
      main: "#D6D6D6",
    },
  },
  typography: {
    h1: {
      fontFamily: `'Metal Mania', cursive`,
    },
    primary: {
      fontFamily: "Allerta Stencil",
    },
    body1: { color: grey[700], fontFamily: "Ubuntu Condensed" },
    body2: { color: grey[400], fontFamily: "Ubuntu Condensed" },

    fontFamily: "Ubuntu Condensed",

    allVariants: {
      color: "black",
      fontWeight: "bold",
    },
  },
});
