import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const FilterOptions = ({ genre, setGenre, rating, setRating }) => {
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  // Function to render star icons based on the rating value
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  };

  return (
    <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Genre</InputLabel>
        <Select value={genre} onChange={handleGenreChange} label="Genre">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="fiction">Fiction</MenuItem>
          <MenuItem value="non-fiction">Non-Fiction</MenuItem>
          <MenuItem value="fantasy">Fantasy</MenuItem>
          <MenuItem value="mystery">Mystery</MenuItem>
          <MenuItem value="science-fiction">Science Fiction</MenuItem>
          <MenuItem value="biography">Biography</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={handleRatingChange} label="Rating">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="5">{renderStars(5)}</MenuItem>
          <MenuItem value="4">{renderStars(4)}</MenuItem>
          <MenuItem value="3">{renderStars(3)}</MenuItem>
          <MenuItem value="2">{renderStars(2)}</MenuItem>
          <MenuItem value="1">{renderStars(1)}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterOptions;
