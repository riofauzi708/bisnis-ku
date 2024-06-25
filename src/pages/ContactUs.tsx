import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ContactUs: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary">Send Message</Button>
    </Box>
  );
};

export default ContactUs;

