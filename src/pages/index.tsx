import React from 'react';

import { Grid, Heading, Avatar, Flex, Box } from '@chakra-ui/core';
import RoundedBox from '../components/Box/Rounded';
import RoundedButton from '../components/Button/Rounded';
import SocialNetwork from '../components/Button/SocialNetwork';

const avatar =
  'https://avatars3.githubusercontent.com/u/59609478?s=460&u=82d661493cc025f92673a13386e3cae90d22ad8b&v=4';

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
        <Flex>
          <Avatar
            src={avatar}
            size="2xl"
            style={{
              border: '4px solid #46D8A9',
              padding: 6,
              backgroundColor: 'transparent',
            }}
          />
          <Flex justifyContent="center" flexDirection="column" paddingLeft={4}>
            <Heading as="h2" size="lg" letterSpacing="0.8px">
              Leonardo Rabelo
            </Heading>
            <Heading as="h3" size="sm" fontWeight={400} letterSpacing="0.8px">
              Desenvolvedor Full-Stack
            </Heading>
            <Box>
              <SocialNetwork>1</SocialNetwork>
            </Box>
          </Flex>
        </Flex>
      </RoundedBox>
      <RoundedBox gridArea="form">
        <p>FwfFEGWE</p>
        <RoundedButton action={() => {}} />
      </RoundedBox>
    </Grid>
  );
};

export default Home;
