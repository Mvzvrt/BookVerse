import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto' }}>
      <Typography variant="body1" align="center">
        &copy; 2024 BookVerse. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        Contact: contact@bookverse.com
      </Typography>
    </Box>
  );
};

export default Footer;
