import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './';

export const SideBar = ({ drawerWidth = 340, mobileOpen = false, handleDrawerToggle }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    const drawer = (
        <>
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    notes.map(note => (
                        <SideBarItem key={ note.id } { ...note } />
                    ))
                }
            </List>
        </>
    );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            {/* Mobile drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box',
                        width: drawerWidth 
                    }
                }}
            >
                {drawer}
            </Drawer>

            {/* Desktop drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box',
                        width: drawerWidth 
                    }
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
};