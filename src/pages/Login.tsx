import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';

interface LoginInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();
  const [isRegister, setIsRegister] = useState(false);
  
  const onSubmit: SubmitHandler<LoginInputs> = data => {
    console.log(data);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>{isRegister ? 'Register' : 'Login'}</Typography>
      <TextField
        label="Email"
        {...register("email", { required: true })}
        error={!!errors.email}
        helperText={errors.email ? "Email is required" : ""}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        {...register("password", { required: true })}
        error={!!errors.password}
        helperText={errors.password ? "Password is required" : ""}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit(onSubmit)}>
        {isRegister ? 'Register' : 'Login'}
      </Button>
      <Button fullWidth sx={{ mt: 2 }} onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
      </Button>
    </Box>
  );
};

export default Login;
