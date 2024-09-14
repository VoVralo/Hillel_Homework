import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const SWAPI = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Персонажи SWAPI</Typography>
      <List>
        {characters.map((character, index) => (
          <ListItem key={index}>{character.name}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SWAPI;
