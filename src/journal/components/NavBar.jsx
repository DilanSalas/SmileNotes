// NavBar.jsx
import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 340, handleDrawerToggle }) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(startLogout());

  return (
    <AppBar
      position="fixed"
      className="app-bar box-shadow"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? '#1e293b' // modo oscuro
            : '#ffffff', // modo claro
        color: (theme) =>
          theme.palette.mode === 'dark'
            ? '#f8fafc'
            : '#0f172a',
      }}
    >

      <Toolbar className="toolbar">
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          className="theme-toggle"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined className="theme-icon-light" />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="nav-links"
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 700,
              fontSize: '1.5rem',
              backgroundImage: 'linear-gradient(to right, #f43f5e, #6366f1)', // rojo a azul
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            Smile Notes
          </Typography>
          
          <IconButton
            color="inherit"
            onClick={onLogout}
            className="theme-toggle"
          >
            <LogoutOutlined className="theme-icon-dark" /> {/* color y glow */}
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
