// src/components/IdeaCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

interface IdeaCardProps {
  id: string;
  index: number;
  title: string;
  description: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ id, index, title, description }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ marginBottom: 2 }}
        >
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

export default IdeaCard;
