import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import CreateIdeaDialog from '../components/CreateIdeaDialog';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import IdeaList from '../components/IdeaList';

const initialIdeas: { [key: string]: { id: string; title: string; description: string }[] } = {
  planning: [
    { id: '1', title: 'Plan Idea 1', description: 'Description for Plan Idea 1' },
    { id: '2', title: 'Plan Idea 2', description: 'Description for Plan Idea 2' },
  ],
  inProgress: [
    { id: '3', title: 'In Progress Idea 1', description: 'Description for In Progress Idea 1' },
  ],
  review: [],
  done: [],
};

const Home: React.FC = () => {
  const [ideas, setIdeas] = useState(initialIdeas);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const destinationList = Array.from(ideas[result.destination.droppableId]);

    const sourceList = Array.from(ideas[result.source.droppableId]);
    const [removed] = sourceList.splice(result.source.index, 1);
    destinationList.splice(result.destination.index, 0, removed);

    setIdeas((prev) => ({
      ...prev,
      [result.source.droppableId]: sourceList,
      [result.destination.droppableId]: destinationList,
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container>
          <CreateIdeaDialog />
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <IdeaList title="Planning" ideas={ideas.planning} droppableId="planning" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <IdeaList title="In Progress" ideas={ideas.inProgress} droppableId="inProgress" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <IdeaList title="Review" ideas={ideas.review} droppableId="review" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <IdeaList title="Done" ideas={ideas.done} droppableId="done" />
              </Grid>
            </Grid>
          </DragDropContext>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
