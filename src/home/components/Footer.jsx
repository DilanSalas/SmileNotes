import {
    Typography,
    Grid,
    Box,
    Container,
  } from "@mui/material"
  import {
    AutoAwesome as SparklesIcon,
  } from "@mui/icons-material"
  
  const Footer = () => {
    return (
      <footer className="footer">
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box className="footer-logo">
                <SparklesIcon className="footer-logo-icon" />
                <Typography variant="h6" component="span" className="footer-logo-text">
                  SmileNotes
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" className="footer-copyright" align="center">
                © {new Date().getFullYear()} SmileNotes. Creado con 💜 para tu bienestar mental.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    )
  }
  
  export default Footer