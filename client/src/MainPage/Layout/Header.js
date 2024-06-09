import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BookVerse
        </Typography>
        <Button color="inherit" component={RouterLink} to="/main">Home</Button>
        <Button color="inherit" component={RouterLink} to="/login">Log Out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
