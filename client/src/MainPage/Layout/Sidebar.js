import React, { useState } from 'react';
import { Box, IconButton, Drawer, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <IconButton onClick={toggleDrawer} color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, height: '100%', bgcolor: 'primary.main' }}>
          <List>
            <ListItem button component={RouterLink} to="/profile">
              <ListItemAvatar>
                <Avatar alt="User Profile" src="/path/to/profile/pic" />
              </ListItemAvatar>
              <ListItemText primary="User Name" sx={{ marginLeft: 1 }} />
            </ListItem>
            {/* Add more sidebar items here */}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
