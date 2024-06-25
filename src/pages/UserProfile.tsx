import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', profit: 4000, loss: 2400 },
  { name: 'Feb', profit: 3000, loss: 1398 },
  { name: 'Mar', profit: 2000, loss: 9800 },
  { name: 'Apr', profit: 2780, loss: 3908 },
  { name: 'May', profit: 1890, loss: 4800 },
  { name: 'Jun', profit: 2390, loss: 3800 },
  { name: 'Jul', profit: 3490, loss: 4300 },
];

const UserProfile: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Box>
      <Typography variant="h4">User Profile</Typography>
      <Typography variant="body1">This page will contain user profile information and charts.</Typography>
    </Box>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Profit and Loss</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
          <Line type="monotone" dataKey="loss" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default UserProfile;
