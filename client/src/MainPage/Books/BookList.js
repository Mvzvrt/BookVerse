import React from 'react';
import { Grid } from '@mui/material';
import BookCard from './BookCard';

const books = [
  { id: 1, title: 'Book One', genre: 'fiction', rating: 5 },
  { id: 2, title: 'Book Two', genre: 'non-fiction', rating: 4 },
  // Add more books here
];

const BookList = ({ searchQuery, genre, rating }) => {
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = genre ? book.genre === genre : true;
    const matchesRating = rating ? book.rating === parseInt(rating, 10) : true;
    return matchesSearch && matchesGenre && matchesRating;
  });

  return (
    <>
      {filteredBooks.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookCard book={book} />
        </Grid>
      ))}
    </>
  );
};

export default BookList;
