import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => (
  <footer style={{ padding: '20px 0', backgroundColor: '#f1f1f1' }}>
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        Контакты: example@example.com
      </Typography>
    </Container>
  </footer>
);

export default Footer;
