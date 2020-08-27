import React from 'react';

import { Grid, Heading, Avatar, Flex, Box, Link } from '@chakra-ui/core';

import { GitHub, LinkedIn, Mail } from '@material-ui/icons';

import RoundedBox from '../components/Box/Rounded';
import RoundedButton from '../components/Button/Rounded';
import LinkButton from '../components/Button/LinkButton';

const avatar =
  'https://avatars3.githubusercontent.com/u/59609478?s=460&u=82d661493cc025f92673a13386e3cae90d22ad8b&v=4';

const Home: React.FC = () => {
  return (
    <Grid
      margin="0 auto"
      maxWidth="1140px"
      templateAreas="
          'avatar skills'
          'about about'
        "
      gap={4}
      padding={8}
      gridTemplateColumns="minmax(600px, 450px) minmax(300px, 1fr)"
    >
      <RoundedBox gridArea="avatar">
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
            <Heading as="h2" size="lg" letterSpacing="0.8px" fontWeight={600}>
              Leonardo Rabelo
            </Heading>
            <Heading
              as="h3"
              size="sm"
              fontWeight={400}
              letterSpacing="0.8px"
              marginBottom={4}
            >
              Desenvolvedor Full-Stack
            </Heading>
            <Grid
              templateAreas="
                'input1 input2 input3'
              "
              gap={2}
            >
              <LinkButton>
                <GitHub />
              </LinkButton>
              <LinkButton>
                <LinkedIn />
              </LinkButton>
              <LinkButton>
                <Mail />
              </LinkButton>
            </Grid>
          </Flex>
        </Flex>
      </RoundedBox>
      <RoundedBox gridArea="skills">
        <p>FwfFEGWE</p>
        <RoundedButton action={() => {}} />
      </RoundedBox>
      <RoundedBox gridArea="about">
        <Grid
          templateAreas='
            "mainSkills otherSkills"
          '
        >
          <Flex flexDirection="column" gridArea="mainSkills">
            <Heading size="md" marginBottom={4}>
              Principais Habilidades
            </Heading>
            <Link className="linkButton" href="http">
              <img src="/icons/icons8-javascript.svg" alt="" />
              <p>Javascript</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-typescript.svg" alt="" />
              <p>Typescript</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-node-js.svg" alt="" />
              <p>Node JS</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-react-native.svg" alt="" />
              <p>ReactJS / React Native</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-mongodb.svg" alt="" />
              <p>MongoDB</p>
            </Link>
          </Flex>
          <Flex flexDirection="column" gridArea="otherSkills">
            <Heading size="md" marginBottom={4}>
              Principais Habilidades
            </Heading>
            <Link className="linkButton" href="http">
              <img src="/icons/icons8-javascript.svg" alt="" />
              <p>Javascript</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-typescript.svg" alt="" />
              <p>Typescript</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-node-js.svg" alt="" />
              <p>Node JS</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-react-native.svg" alt="" />
              <p>ReactJS / React Native</p>
            </Link>

            <Link className="linkButton" href="http">
              <img src="/icons/icons8-mongodb.svg" alt="" />
              <p>MongoDB</p>
            </Link>
          </Flex>
        </Grid>
      </RoundedBox>
    </Grid>
  );
};

export default Home;
