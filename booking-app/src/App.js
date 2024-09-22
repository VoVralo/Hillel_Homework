import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Hotels from './components/Hotels';
import { AppBar, Toolbar, Button } from '@mui/material';

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">Main</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/hotels" color="inherit">Hotels</Button>
      </Toolbar>
    </AppBar>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/hotels" element={<Hotels />} />
    </Routes>
  </Router>
);

export default App;
