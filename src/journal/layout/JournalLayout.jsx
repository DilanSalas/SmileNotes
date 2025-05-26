import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 340;

export const JournalLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',           // forzar fila en desktop
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {/* Navbar fijo arriba */}
      <NavBar
        className="app-bar box-shadow"
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Sidebar responsive: MUI Drawer maneja el comportamiento móvil */}
      <SideBar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` }, // full width en xs, espacio a un lado en sm+
        }}
        className="box-shadow"
      >
        <Toolbar />  {/* separador para el AppBar */}
        {children}
      </Box>
    </Box>
  );
};
