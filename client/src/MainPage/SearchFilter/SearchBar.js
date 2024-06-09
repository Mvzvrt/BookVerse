import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        label="Search Books"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SearchBar;
