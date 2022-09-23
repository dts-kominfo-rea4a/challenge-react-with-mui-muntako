// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography, Divider } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <Typography variant="h3" sx={{ m:2 }}>Call a Friend</Typography>
    <Typography variant="h5">
      <Divider>Your friendly contact app</Divider></Typography>
    </>
  );
};

export default Header;
