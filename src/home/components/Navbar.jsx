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
import { useNavigate } from "react-router-dom";

export const Navbar = ({ isDark, toggleTheme }) => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/auth");
  };

  const handleLogoClick = () => {
    navigate("/"); // Redirige al index
  };
 
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
            <Button href="#quotes" color="inherit" className="nav-link">
              Frases
            </Button>
            <Button href="#reflection" color="inherit" className="nav-link">
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
