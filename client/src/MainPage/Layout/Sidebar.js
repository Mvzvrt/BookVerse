import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemText, Avatar, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: expanded ? 240 : 60,
          bgcolor: 'grey.800', // Using a dark gray color
          color: 'white',
          transition: 'width 0.3s',
          overflow: 'hidden',
          height: '100vh', // Full height sidebar
        }}
      >
        <Button onClick={handleToggle} sx={{ m: 1, color: 'white' }}>
          {expanded ? '<' : '>'}
        </Button>
        {expanded && (
          <>
            <Divider sx={{ bgcolor: 'white' }} />
            <List>
              <ListItem button component={RouterLink} to="/profile">
                <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
                <ListItemText primary="User Name" sx={{ ml: 2 }} />
              </ListItem>
            </List>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
