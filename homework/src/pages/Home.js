import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => (
  <Container>
    <Typography variant="h4">Обо мне</Typography>
    <Typography paragraph>
      Привет! Я разработчик, специализирующийся на фронтенд-разработке. Я изучаю новые технологии для создания современных веб-приложений и сейчас все ещё обучаюсь.
    </Typography>
    <Typography paragraph>
      У меня есть опыт запуска серверов на Linux и настройки сред для разработки.
    </Typography>
  </Container>
);

export default Home;
