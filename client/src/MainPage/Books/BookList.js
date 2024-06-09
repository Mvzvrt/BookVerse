import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import BookCard from './BookCard';
import booksData from '../Books/books.json'

const BookList = ({ searchQuery, genre, rating }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(booksData);
    }, []);

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
