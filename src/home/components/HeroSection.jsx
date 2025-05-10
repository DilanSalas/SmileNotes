import { Box, Button, Container, Grid, Typography } from "@mui/material"

export const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-background"></div>
    <Container maxWidth="xl" className="hero-container">
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Box className="hero-content">
            <Typography variant="h1" className="hero-title">
              Cuida tu mente con notas positivas
            </Typography>
            <Typography variant="body1" className="hero-subtitle">
              Descubre cómo pequeñas reflexiones diarias pueden transformar tu bienestar mental y emocional.
            </Typography>
            <Box className="button-group">
              <Button variant="contained" size="large" className="primary-button">
                Comenzar ahora
              </Button>
              <Button variant="outlined" size="large" className="secondary-button">
                Saber más
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box className="hero-image-container">
            <img
              src="https://via.placeholder.com/500"
              alt="Ilustración de salud mental"
              className="hero-image"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="blob blob3"></div>
  </section>
)
