import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 340;

export const JournalLayout = ({children}) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box 
            sx={{ display: 'flex' }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <NavBar 
                drawerWidth={drawerWidth} 
                handleDrawerToggle={handleDrawerToggle}
            />

            <SideBar 
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Box 
                component='main'
                sx={{ 
                    flexGrow: 1, 
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` }
                }}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
};