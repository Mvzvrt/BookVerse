import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={RouterLink}
          to={`/book/${book.id}`}
          state={{ book }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
