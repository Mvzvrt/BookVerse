import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import ResponsiveGrid from './Layout/ResponsiveGrid';
import BookList from './Books/BookList';
import SearchBar from './SearchFilter/SearchBar';
import FilterOptions from './SearchFilter/FilterOptions';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Container maxWidth="lg" sx={{ flexGrow: 1, mt: 4, bgcolor: 'grey.100', p: 2 }}>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <FilterOptions genre={genre} setGenre={setGenre} rating={rating} setRating={setRating} />
          <ResponsiveGrid>
            <BookList searchQuery={searchQuery} genre={genre} rating={rating} />
          </ResponsiveGrid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
