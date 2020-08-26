import React from 'react';

import { Grid } from '@chakra-ui/core';
import { RoundedBox } from '../components/Boxes';

const Home: React.FC = () => {
  return (
    <Grid
      templateAreas="
        'about form'
      "
      gap={4}
      padding={8}
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.900"
      height="100vh"
      gridTemplateColumns="minmax(300px, 500px) 1fr"
    >
      <RoundedBox gridArea="about">
        <p>1</p>
      </RoundedBox>
      <RoundedBox gridArea="form">
        <p>2</p>
      </RoundedBox>
    </Grid>
  );
};

export default Home;
