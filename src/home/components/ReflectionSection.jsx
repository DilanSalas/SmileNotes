import {
    Typography,
    Grid,
    Box,
    Container,
  } from "@mui/material"

  
  const ReflectionSection = () => {
    return (
      <section id="reflection" className="reflection-section">
        <Container maxWidth="xl">
          <Typography variant="h2" component="h2" className="section-title" align="center">
            Imágenes para Reflexión
          </Typography>
  
          <Box className="reflection-container">
            {/* Scattered images in an organic layout */}
            <Grid container spacing={4} className="reflection-grid">
              {/* Image 1 - Large left */}
              <Grid item xs={12} md={7} className="reflection-grid-item">
                <Box className="fade-right">
                  <Box className="image-wrapper image-wrapper1">
                    <img
                      src="https://via.placeholder.com/600x350"
                      alt="Imagen de reflexión"
                      className="reflection-image"
                    />
                    <Box className="image-overlay">
                      <Typography variant="body1" className="image-caption">
                        La calma es el lenguaje de la mente
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" className="image-description">
                    Tómate un momento para respirar y encontrar paz en medio del caos diario.
                  </Typography>
                </Box>
              </Grid>
  
              {/* Image 2 - Small top right */}
              <Grid item xs={12} md={5} className="reflection-grid-item reflection-grid-item-top">
                <Box className="fade-left">
                  <Box className="image-wrapper image-wrapper2">
                    <img
                      src="https://via.placeholder.com/400x250"
                      alt="Imagen de reflexión"
                      className="reflection-image"
                    />
                    <Box className="image-overlay">
                      <Typography variant="body1" className="image-caption">
                        Cada paso cuenta en tu camino
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" className="image-description">
                    Los pequeños avances diarios se convierten en grandes transformaciones.
                  </Typography>
                </Box>
              </Grid>
  
              {/* Image 3 - Medium bottom right */}
              <Grid item xs={12} md={5} className="reflection-grid-item reflection-grid-item-right">
                <Box className="fade-up">
                  <Box className="image-wrapper image-wrapper3">
                    <img
                      src="https://via.placeholder.com/420x280"
                      alt="Imagen de reflexión"
                      className="reflection-image"
                    />
                    <Box className="image-overlay">
                      <Typography variant="body1" className="image-caption">
                        Encuentra belleza en lo simple
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" className="image-description">
                    Las pequeñas cosas de la vida suelen ser las más significativas.
                  </Typography>
                </Box>
              </Grid>
  
              {/* Image 4 - Wide bottom */}
              <Grid item xs={12} className="reflection-grid-item reflection-grid-item-wide">
                <Box className="fade-up">
                  <Box className="image-wrapper image-wrapper4">
                    <img
                      src="https://via.placeholder.com/1200x220"
                      alt="Imagen de reflexión panorámica"
                      className="reflection-image"
                    />
                    <Box className="image-overlay">
                      <Typography variant="body1" className="image-caption">
                        El horizonte siempre está a la vista, solo necesitas levantar la mirada
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" className="image-description">
                    Cuando te sientas perdido, recuerda que siempre hay nuevas perspectivas por descubrir.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
  
            {/* Decorative elements */}
            <div className="blob reflection-blob1"></div>
            <div className="blob reflection-blob2"></div>
          </Box>
        </Container>
      </section>
    )
  }
  
  export default ReflectionSection