// NothingSelectedView.jsx
import { StarOutline } from "@mui/icons-material";
import { Grid, Typography, Box } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Box
      className="hero-section animate__animated animate__fadeIn animate__faster"
      sx={{ minHeight: "calc(100vh - 110px)" }}
    >
      <Box className="hero-background" />
      <Box className="hero-container">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className="hero-content"
          sx={{ minHeight: "100%" }}
        >
          <Grid item>
            <StarOutline
              className="logo-icon"
              sx={{ fontSize: "12rem !important" }}
            />
          </Grid>
          <Grid item>
            <Typography component="div" className="hero-title">
              Selecciona una opción
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

