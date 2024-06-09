import React from 'react';
import { Grid } from '@mui/material';
import BookCard from './BookCard';

const books = [
  // Mock data for books
  { id: 1, title: 'Book One', author: 'Author One', description: 'Description of book one' },
  { id: 2, title: 'Book Two', author: 'Author Two', description: 'Description of book two' },
  // Add more books as needed
];

const BookList = () => {
  return (
    <>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookCard book={book} />
        </Grid>
      ))}
    </>
  );
};

export default BookList;
