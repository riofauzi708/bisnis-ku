// src/components/CreateIdeaDialog.tsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const CreateIdeaDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [idea, setIdea] = useState({ title: '', description: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIdea({ ...idea, [name]: value });
  };

  const handleSubmit = () => {
    // Handle idea submission logic
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Create New Idea
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create New Idea</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Idea Title"
            fullWidth
            variant="outlined"
            value={idea.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Idea Description"
            fullWidth
            variant="outlined"
            value={idea.description}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateIdeaDialog;
