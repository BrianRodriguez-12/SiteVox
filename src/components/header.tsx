import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Travel App
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
