import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Container,
  } from "@mui/material"
  import {
    Brightness4 as DarkIcon,
    Brightness7 as LightIcon,
    AutoAwesome as SparklesIcon,
    ArrowForward as ArrowIcon,
  } from "@mui/icons-material"
  import '../styles/styles.css'
  
  export const Navbar = ({ isDark, toggleTheme }) => (
    <AppBar position="sticky" color="inherit" elevation={0} className="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <Box className="logo-container">
            <SparklesIcon className="logo-icon" />
            <Typography variant="h5" component="span" className="logo-text">
              Smile Notes
            </Typography>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}
            className="nav-links"
          >
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
              {isDark ? <LightIcon /> : <DarkIcon />}
            </IconButton>
            <Button variant="contained" className="cta-button" endIcon={<ArrowIcon />}>
              Comenzar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
  