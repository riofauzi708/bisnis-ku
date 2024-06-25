import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, CssBaseline, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; // Ikon untuk logo
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const drawerWidth = 240;

const Layout: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
          ml: { sm: `${drawerOpen ? drawerWidth : 0}px` },
          transition: (theme) => theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <BusinessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Bisnisku
          </Typography>

          <Link to="/login"><Button sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }, color: 'white' }}>Login</Button></Link>
          <Link to="/about-us"><Button sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }, color: 'white' }}>About</Button></Link>
          <Link to="/contact-us"><Button sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }, color: 'white' }}>Contact Us</Button></Link>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: (theme) => theme.spacing(0.5, 1),
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Sidebar />
      </Drawer>
      <Box
        sx={{
          padding: (theme) => theme.spacing(2, 0.3),
          transition: (theme) => theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: { sm: `${drawerOpen ? drawerWidth : 0}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
