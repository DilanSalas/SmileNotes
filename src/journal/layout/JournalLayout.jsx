import { useState, useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 340;

export const JournalLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🌗 Control del modo claro/oscuro
  const [themeMode, setThemeMode] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('smileNotesTheme');
    if (stored) {
      setThemeMode(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.body.className = themeMode;
    localStorage.setItem('smileNotesTheme', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: { main: '#8b5cf6' },
      secondary: { main: '#ec4899' },
    },
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <NavBar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
          toggleTheme={toggleTheme}
          isDark={themeMode === 'dark'}
        />

        <SideBar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          toggleTheme={toggleTheme}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
          }}
          className="box-shadow"
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
