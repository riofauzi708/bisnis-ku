import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1">
        We are a company dedicated to providing the best business planning and idea management solutions.
        Our mission is to help entrepreneurs and businesses achieve their goals through innovative tools and resources.
      </Typography>
    </Box>
  );
};

export default AboutUs;
