// src/theme/purpleTheme.js
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#262254",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "var(--background-color)", 
      paper: "var(--card-bg)",
    },
    divider: "var(--border-color)",
  },
  typography: {
    fontFamily: `"Nunito","Quicksand",system-ui,...,sans-serif`,
    fontSize: 18,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: "background-color 0.5s ease, color 0.5s ease",
        },
      },
    },
  },
});
