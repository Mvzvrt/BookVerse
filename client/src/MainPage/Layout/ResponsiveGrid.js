import React from 'react';
import { Grid } from '@mui/material';

const ResponsiveGrid = ({ children }) => {
  return (
    <Grid container spacing={4}>
      {children}
    </Grid>
  );
};

export default ResponsiveGrid;
