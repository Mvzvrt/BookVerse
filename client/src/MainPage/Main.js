import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import ResponsiveGrid from './Layout/ResponsiveGrid';
import BookList from './Books/BookList';

const Main = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Container maxWidth="lg" sx={{ flexGrow: 1, mt: 4 }}>
            {/*
                <ResponsiveGrid>
                <BookList />
                </ResponsiveGrid>
            */}
          
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};  

export default Main;
