import {
    Typography,
    Button,
    Box,
    Container,
  } from "@mui/material"
  
  const CtaSection = () => {
    return (
      <section id="about" className="cta-section">
        <Container maxWidth="xl">
          <Box className="cta-container">
            <Typography variant="h2" component="h2" className="cta-title" align="center">
              Comienza tu viaje hacia el bienestar mental
            </Typography>
            <Typography variant="body1" className="cta-subtitle" align="center">
              Smile Notes está aquí para acompañarte en cada paso de tu camino hacia una mente más saludable y
              feliz.
            </Typography>
            <Button variant="contained" size="large" className="cta-button-large">
              Comenzar ahora
            </Button>
          </Box>
        </Container>
      </section>
    )
  }
  
  export default CtaSection