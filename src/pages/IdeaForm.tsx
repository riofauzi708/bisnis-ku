import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';

interface IdeaFormInputs {
  title: string;
  description: string;
}

const IdeaForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IdeaFormInputs>();
  
  const onSubmit: SubmitHandler<IdeaFormInputs> = data => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Title"
        {...register("title", { required: true })}
        error={!!errors.title}
        helperText={errors.title ? "Title is required" : ""}
      />
      <TextField
        label="Description"
        {...register("description", { required: true })}
        error={!!errors.description}
        helperText={errors.description ? "Description is required" : ""}
      />
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  );
};

export default IdeaForm;
