/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Grid, Heading, Avatar, Flex, Link } from '@chakra-ui/core';
import { GitHub, LinkedIn, Mail, Folder } from '@material-ui/icons';

import ProfileContext from '../contexts/profile';

import RoundedBox from '../components/Box/Rounded';
import LinkButton from '../components/Button/LinkButton';

const Home: React.FC = () => {
  const githubProfile = useContext(ProfileContext);
  console.log(githubProfile);

  if (!githubProfile) return <p>carregando</p>;

  return (
    <Grid
      margin="0 auto"
      maxWidth="1140px"
      templateAreas="
          'avatar more'
          'about about'
        "
      gap={4}
      padding={8}
      gridTemplateColumns="minmax(600px, 450px) minmax(300px, 1fr)"
    >
      <RoundedBox gridArea="avatar">
        <Flex>
          <Avatar
            src={githubProfile.avatar_url}
            size="2xl"
            style={{
              border: '4px solid #46D8A9',
              padding: 6,
              backgroundColor: 'transparent',
            }}
          />
          <Flex justifyContent="center" flexDirection="column" paddingLeft={4}>
            <Heading as="h2" size="lg" letterSpacing="0.8px" fontWeight={600}>
              {githubProfile.name}
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
      <RoundedBox gridArea="more">
        <Heading size="sm">Github</Heading>
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
