import {
    Typography,
    Button,
    Grid,
    Box,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material"
  
  
  const PracticeSection = () => {
    return (
      <section className="practice-section">
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6} className="fade-right">
              <Typography variant="h2" component="h2" className="practice-title">
                Práctica diaria para tu bienestar
              </Typography>
              <Typography variant="body1" className="practice-subtitle">
                Incorpora estas pequeñas prácticas en tu rutina diaria para mejorar tu salud mental:
              </Typography>
              <List className="practice-list">
                {[
                  "Escribe tres cosas por las que estás agradecido/a",
                  "Dedica 5 minutos a la meditación consciente",
                  "Lee una frase inspiradora y reflexiona sobre ella",
                  "Realiza un acto de bondad hacia ti mismo/a",
                  "Conecta con un ser querido",
                ].map((item, index) => (
                  <ListItem key={index} className="practice-item">
                    <ListItemIcon className="practice-item-icon">
                      <Box className="practice-item-number">{index + 1}</Box>
                    </ListItemIcon>
                    <ListItemText primary={item} className="practice-item-text" />
                  </ListItem>
                ))}
              </List>
              <Button variant="contained" className="practice-button">
                Comenzar mi práctica
              </Button>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className="practice-image-container">
                <img src="/PracticaIMG.png" alt="Práctica diaria" className="practice-image" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    )
  }
  
  export default PracticeSection