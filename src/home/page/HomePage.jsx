"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Box,
  IconButton,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  ArrowForward as ArrowIcon,
  Favorite as HeartIcon,
  AutoAwesome as SparklesIcon,
} from "@mui/icons-material"
import "../styles/styles.css"

export const HomePage = () => {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery("(max-width:600px)")
  const isDark = theme === "dark"

  useEffect(() => {
    setMounted(true)
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem("smileNotesTheme")
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Verificar preferencia del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
    
    // Aplicar clase al body para cambios globales de tema
    document.body.className = theme
  }, [])

  useEffect(() => {
    if (mounted) {
      document.body.className = theme
      localStorage.setItem("smileNotesTheme", theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Crear tema de Material UI
  const muiTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: "#8b5cf6", // Purple
      },
      secondary: {
        main: "#ec4899", // Pink
      },
    },
    typography: {
      fontFamily: "'Nunito', 'Quicksand', system-ui, sans-serif",
      h1: {
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: 700,
      },
      h2: {
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: 700,
      },
      h3: {
        fontFamily: "'Quicksand', sans-serif",
      },
      button: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "0.75rem",
            fontSize: "1.05rem",
          },
          contained: {
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "1rem",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
  })

  // Si no está montado, no renderizar para evitar problemas de hidratación
  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="root">
        {/* Navbar */}
        <AppBar position="sticky" color="inherit" elevation={0} className="app-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters className="toolbar">
              <Box className="logo-container">
                <SparklesIcon className="logo-icon" />
                <Typography variant="h5" component="span" className="logo-text">
                  Smile Notes
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }} className="nav-links">
                <Button href="#quotes" color="inherit" className="nav-link">
                  Frases
                </Button>
                <Button href="#reflection" color="inherit" className="nav-link">
                  Reflexión
                </Button>
                <Button href="#about" color="inherit" className="nav-link">
                  Acerca de
                </Button>
              </Box>
              <Box className="nav-actions">
                <IconButton onClick={toggleTheme} color="inherit" className="theme-toggle">
                  {isDark ? <LightIcon className="theme-icon-light" /> : <DarkIcon className="theme-icon-dark" />}
                </IconButton>
                <Button variant="contained" className="cta-button" endIcon={<ArrowIcon />}>
                  Comenzar
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <main>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-background"></div>
            <Container maxWidth="xl" className="hero-container">
              <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} lg={6} className="fade-right">
                  <Box className="hero-content">
                    <Typography variant="h1" component="h1" className="hero-title">
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

            {/* Animated shapes */}
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
          </section>

          {/* Quotes Section - Dispersed Style */}
          <section id="quotes" className="quotes-section">
            <div className="section-background"></div>
            <Container maxWidth="xl">
              <Typography variant="h2" component="h2" className="section-title" align="center">
                Frases Motivadoras
              </Typography>

              <Box className="quotes-container">
                {/* Blob decorations */}
                <div className="blob quote-blob1"></div>
                <div className="blob quote-blob2"></div>
                <div className="blob quote-blob3"></div>

                {/* Dispersed quotes */}
                <Grid container spacing={4} className="quotes-grid">
                  <Grid item xs={12} md={8} className="quote-grid-item">
                    <Card className="quote-card quote-card1">
                      <div
                        className="card-accent"
                        style={{ background: "linear-gradient(to right, #fbbf24, #f59e0b)" }}
                      ></div>
                      <CardContent className="quote-content">
                        <Box position="relative">
                          <HeartIcon className="heart-icon" />
                          <Typography variant="body1" component="blockquote" className="quote-text">
                            "La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos."
                          </Typography>
                        </Box>
                        <Typography variant="caption" className="quote-author">
                          — Steve Maraboli
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4} className="quote-grid-item">
                    <Card className="quote-card quote-card2">
                      <div
                        className="card-accent"
                        style={{ background: "linear-gradient(to right, #f472b6, #c084fc)" }}
                      ></div>
                      <CardContent className="quote-content">
                        <Box position="relative">
                          <HeartIcon className="heart-icon" />
                          <Typography variant="body1" component="blockquote" className="quote-text">
                            "Tu mente es un jardín, tus pensamientos son las semillas. Puedes cultivar flores o maleza."
                          </Typography>
                        </Box>
                        <Typography variant="caption" className="quote-author">
                          — Anónimo
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4} className="quote-grid-item">
                    <Card className="quote-card quote-card3">
                      <div
                        className="card-accent"
                        style={{ background: "linear-gradient(to right, #60a5fa, #67e8f9)" }}
                      ></div>
                      <CardContent className="quote-content">
                        <Box position="relative">
                          <HeartIcon className="heart-icon" />
                          <Typography variant="body1" component="blockquote" className="quote-text">
                            "Cada día es una nueva oportunidad para cambiar tu vida."
                          </Typography>
                        </Box>
                        <Typography variant="caption" className="quote-author">
                          — Anónimo
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4} className="quote-grid-item">
                    <Card className="quote-card quote-card4">
                      <div
                        className="card-accent"
                        style={{ background: "linear-gradient(to right, #a78bfa, #818cf8)" }}
                      ></div>
                      <CardContent className="quote-content">
                        <Box position="relative">
                          <HeartIcon className="heart-icon" />
                          <Typography variant="body1" component="blockquote" className="quote-text">
                            "La paz comienza con una sonrisa."
                          </Typography>
                        </Box>
                        <Typography variant="caption" className="quote-author">
                          — Madre Teresa
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={8} className="quote-grid-item">
                    <Card className="quote-card quote-card5">
                      <div
                        className="card-accent"
                        style={{ background: "linear-gradient(to right, #34d399, #5eead4)" }}
                      ></div>
                      <CardContent className="quote-content">
                        <Box position="relative">
                          <HeartIcon className="heart-icon" />
                          <Typography variant="body1" component="blockquote" className="quote-text">
                            "Eres más fuerte de lo que crees, más valiente de lo que pareces y más inteligente de lo que
                            piensas."
                          </Typography>
                        </Box>
                        <Typography variant="caption" className="quote-author">
                          — A.A. Milne
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </section>

          {/* Reflection Images Section - Dispersed Style */}
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

          {/* Daily Practice Section */}
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
                    <img src="https://via.placeholder.com/500" alt="Práctica diaria" className="practice-image" />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>

          {/* Call to Action */}
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
        </main>

        {/* Footer */}
        <footer className="footer">
          <Container maxWidth="xl">
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box className="footer-logo">
                  <SparklesIcon className="footer-logo-icon" />
                  <Typography variant="h6" component="span" className="footer-logo-text">
                    Smile Notes
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" className="footer-copyright" align={isMobile ? "left" : "center"}>
                  © {new Date().getFullYear()} Smile Notes. Creado con 💜 para tu bienestar mental.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="footer-links">
                  <a href="#" className="footer-link">
                    Términos
                  </a>
                  <a href="#" className="footer-link">
                    Privacidad
                  </a>
                  <a href="#" className="footer-link">
                    Contacto
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </div>
    </ThemeProvider>
  )
}

