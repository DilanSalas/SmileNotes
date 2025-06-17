import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  AutoAwesome as SparklesIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = ({ isDark, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStartClick = () => {
    navigate("/auth");
  };

  const handleLogoClick = () => {
    navigate("/"); 
  };

  // Función para manejar la navegación con hash
  const handleHashNavigation = (hash) => {
    // Si ya estamos en la página principal, solo navegamos al hash
    if (location.pathname === '/') {
      // Scroll suave a la sección
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si estamos en otra página, primero navegamos a la página principal
      navigate('/');
      // Guardamos el hash para usarlo después de la navegación
      sessionStorage.setItem('scrollTarget', hash);
    }
  };
  
  // Efecto para manejar el scroll después de la navegación
  useEffect(() => {
    if (location.pathname === '/') {
      const scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        // Pequeño timeout para asegurar que el DOM está listo
        setTimeout(() => {
          const element = document.getElementById(scrollTarget);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            sessionStorage.removeItem('scrollTarget');
          }
        }, 100);
      }
    }
  }, [location.pathname]);
 
  return (
    <AppBar position="sticky" color="inherit" elevation={0} className="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">

          {/* Logo clickeable */}
          <Box className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <SparklesIcon className="logo-icon" />
            <Typography variant="h5" component="span" className="logo-text">
              SmileNotes
            </Typography>
          </Box>

          {/* Navegación intermedia */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
            className="nav-links"
          >
            <Button 
              onClick={() => handleHashNavigation('quotes')} 
              color="inherit" 
              className="nav-link"
            >
              Frases
            </Button>
            <Button 
              onClick={() => handleHashNavigation('reflection')} 
              color="inherit" 
              className="nav-link"
            >
              Reflexión
            </Button>
            <Button
              onClick={() => navigate("/About")}
              color="inherit"
              className="nav-link"
            >
              Acerca de
            </Button>

          </Box>

          {/* Acciones a la derecha */}
          <Box className="nav-actions">
            <IconButton onClick={toggleTheme} color="inherit" className="theme-toggle">
              {isDark ? <LightIcon /> : <DarkIcon />}
            </IconButton>
            <Button
              variant="contained"
              className="cta-button"
              endIcon={<ArrowIcon />}
              onClick={handleStartClick}
            >
              Comenzar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
