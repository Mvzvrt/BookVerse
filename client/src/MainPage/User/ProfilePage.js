import React from 'react';
import { Typography, Avatar, Button, Box, Divider } from '@mui/material';

const ProfilePage = () => {
  // Arbitrary user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "https://via.placeholder.com/150",
    location: "New York, USA",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    joinedDate: "January 1, 2022"
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Avatar sx={{ width: 100, height: 100, mb: 2 }} alt="User Avatar" src={user.avatarUrl} />
      <Typography variant="h5" gutterBottom>{user.name}</Typography>
      <Typography variant="subtitle1" gutterBottom>{user.email}</Typography>
      <Divider sx={{ width: '100%', my: 2 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
        <Typography variant="subtitle1" gutterBottom>Location: {user.location}</Typography>
        <Typography variant="subtitle1" gutterBottom>Bio: {user.bio}</Typography>
        <Typography variant="subtitle1" gutterBottom>Joined: {user.joinedDate}</Typography>
      </Box>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Edit Profile</Button>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }} href="/main">Back to Books</Button>
    </Box>
  );
};

export default ProfilePage;
