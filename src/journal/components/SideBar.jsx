import { Box, Drawer, List, Toolbar, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './';
import { WbSunny, NightlightRound } from '@mui/icons-material';
import { useState } from 'react';


export const SideBar = ({ drawerWidth = 340, mobileOpen = false, handleDrawerToggle, toggleTheme }) => {
  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [searchDate, setSearchDate] = useState('');
  const [sortNewestFirst, setSortNewestFirst] = useState(true);

  const filteredNotes = [...notes]
    .filter(note => {
      if (!searchDate) return true;
      const noteDate = new Date(note.date).toISOString().split('T')[0];
      return noteDate === searchDate;
    })
    .sort((a, b) =>
      sortNewestFirst
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  const drawer = (
    <>
      <Toolbar
        sx={{
          padding: '0.75rem 1.5rem',
          borderBottom: `1px solid ${isDarkMode ? 'var(--border-color, #1e293b)' : 'var(--border-color, #e2e8f0)'}`,
        }}
        className="logo-container"
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.02em',
          }}
          className="logo-text"
        >
          {displayName}
        </Typography>

        {/* BOTÓN DE CAMBIO DE TEMA */}
        <Box
          onClick={toggleTheme}
          sx={{
            ml: 'auto',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              transform: 'rotate(15deg)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          className="theme-toggle"
        >
          {isDarkMode ? (
            <NightlightRound
              sx={{
                color: '#8b5cf6',
                fontSize: '1.5rem',
                filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))',
              }}
              className="theme-icon-dark"
            />
          ) : (
            <WbSunny
              sx={{
                color: '#fbbf24',
                fontSize: '1.5rem',
                filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))',
              }}
              className="theme-icon-light"
            />
          )}
        </Box>
      </Toolbar>

      <Box
        sx={{
          overflow: 'auto',
          backgroundColor: isDarkMode ? 'var(--background-color, #0f172a)' : 'var(--background-color, #ffffff)',
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Decorative blobs */}
        <Box
          className="blob blob1"
          sx={{
            bottom: '-50px',
            left: 0,
            width: '200px',
            height: '200px',
            backgroundColor: 'rgba(254, 240, 138, 0.2)',
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.3,
            animation: 'blob 15s infinite alternate',
          }}
        />
        <Box
          className="blob blob2"
          sx={{
            top: '25%',
            right: '15%',
            width: '150px',
            height: '150px',
            backgroundColor: 'rgba(233, 213, 255, 0.2)',
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.3,
            animation: 'blob 15s infinite alternate',
            animationDelay: '3s',
          }}
        />

        <Box sx={{ padding: '1rem' }}>
          <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
            <button
              onClick={() => {
                setSearchDate('');
                setSortNewestFirst(true);
              }}
              style={{
                fontFamily: 'Quicksand',
                background: '#ec4899',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: '0.3s',
              }}
            >
              🔄 Restablecer
            </button>

            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              style={{
                fontFamily: 'Quicksand',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
                background: isDarkMode ? '#1e293b' : '#fff',
                color: isDarkMode ? '#f8fafc' : '#0f172a',
                flex: 1,
              }}
            />
            <button
              onClick={() => setSortNewestFirst(!sortNewestFirst)}
              style={{
                fontFamily: 'Quicksand',
                background: '#8b5cf6',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: '0.3s',
              }}
            >
              {sortNewestFirst ? '🔽 Nuevos' : '🔼 Antiguos'}
            </button>
          </Box>

          <List>
            {filteredNotes.map((note) => (
              <SideBarItem
                key={note.id}
                {...note}
                sx={{
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow:
                      '0 10px 25px -5px rgba(139, 92, 246, 0.2), 0 8px 10px -6px rgba(236, 72, 153, 0.1)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  marginBottom: '0.75rem',
                  position: 'relative',
                  zIndex: 2,
                }}
                className="box-shadow"
              />
            ))}
          </List>
        </Box>

      </Box>
    </>
  )
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: `1px solid ${isDarkMode ? 'var(--border-color, #1e293b)' : 'var(--border-color, #e2e8f0)'}`,
            backgroundColor: isDarkMode ? 'var(--background-color, #0f172a)' : 'var(--background-color, #ffffff)',
            color: isDarkMode ? 'var(--text-primary, #f8fafc)' : 'var(--text-primary, #0f172a)',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: `1px solid ${isDarkMode ? 'var(--border-color, #1e293b)' : 'var(--border-color, #e2e8f0)'}`,
            backgroundColor: isDarkMode ? 'var(--background-color, #0f172a)' : 'var(--background-color, #ffffff)',
            color: isDarkMode ? 'var(--text-primary, #f8fafc)' : 'var(--text-primary, #0f172a)',
            transition: 'background-color 0.5s ease, color 0.5s ease',
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.2);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.8);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </Box>
  );
};
