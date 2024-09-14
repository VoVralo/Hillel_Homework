
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Мой Сайт
      </Typography>
      <Button color="inherit" component={Link} to="/">Главная</Button>
      <Button color="inherit" component={Link} to="/todo">TODO</Button>
      <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
