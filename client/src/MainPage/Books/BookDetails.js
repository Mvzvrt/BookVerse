import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Box, Typography, Button, Card, CardContent, CardMedia, Grid, Divider } from '@mui/material';

const BookDetail = () => {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 4, minHeight: '100vh'}}>
      <Container maxWidth="md">
        <Card sx={{ my: 4, p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                height="350"
                image={book.image || 'https://via.placeholder.com/350x500'}
                alt={book.title}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent>
                <Typography variant="h4" gutterBottom>{book.title}</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" gutterBottom><strong>Author:</strong> {book.author}</Typography>
                <Typography variant="subtitle1" gutterBottom><strong>Genre:</strong> {book.genre}</Typography>
                <Typography variant="subtitle1" gutterBottom><strong>Rating:</strong> {book.rating}</Typography>
                <Typography variant="body1" paragraph>
                  {book.description}
                </Typography>
                <Button variant="contained" href="/main">Back to List</Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default BookDetail;
