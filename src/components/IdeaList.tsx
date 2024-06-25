import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface Idea {
  id: string;
  title: string;
  description: string;
}

interface IdeaListProps {
  title: string;
  ideas: Idea[];
  droppableId: string;
}

const IdeaList: React.FC<IdeaListProps> = ({ title, ideas, droppableId }) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps} sx={{ minHeight: 200, padding: 2, backgroundColor: '#f0f0f0' }}>
            {ideas.map((idea, index) => (
              <Draggable key={idea.id} draggableId={idea.id} index={index}>
                {(provided) => (
                  <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} sx={{ marginBottom: 2 }}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5">{idea.title}</Typography>
                        <Typography variant="body2">{idea.description}</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default IdeaList;
