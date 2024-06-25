import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const BusinessPlan: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>Business Plan</Typography>
      <TextField label="Plan Title" fullWidth margin="normal" />
      <TextField label="Description" fullWidth margin="normal" multiline rows={4} />
      <TextField label="Goals" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary">Save Plan</Button>
    </Box>
  );
};

export default BusinessPlan;
