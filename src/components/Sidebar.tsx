import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Button, Card, CardContent, Typography, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BusinessIcon from '@mui/icons-material/Business';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const profileImageUrl = 'URL_GAMBAR_PROFIL';

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}>
        <Avatar
          sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}
          src={profileImageUrl}
          alt="Profil Pengguna"
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="div">
            Nama Pengguna
          </Typography>
          <Typography color="text.secondary">
            Jabatan Pengguna
          </Typography>
        </CardContent>
      </Card>

      <Button variant="contained" component={NavLink} to="/user-profile" sx={{ width: '80%', marginLeft: '10%', marginBottom: 2 }}>
        User Profile
      </Button>

      <List component="nav">
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Beranda" />
          </ListItem>
        </NavLink>
        <NavLink to="/submit-idea" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem>
            <ListItemIcon>
              <LightbulbIcon />
            </ListItemIcon>
            <ListItemText primary="Ide Bisnis" />
          </ListItem>
        </NavLink>
        <NavLink to="/business-plan" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Rencana Bisnis" />
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );
};

export default Sidebar;
