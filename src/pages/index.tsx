/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Grid, Heading, Avatar, Flex, Link, Text } from '@chakra-ui/core';
import { GitHub, LinkedIn, Mail } from '@material-ui/icons';

import ProfileContext from '../contexts/profile';

import RoundedBox from '../components/Box/Rounded';
import LinkButton from '../components/Button/LinkButton';

const Home: React.FC = () => {
  const githubProfile = useContext(ProfileContext);

  return (
    <Grid
      margin="0 auto"
      maxWidth="1140px"
      templateAreas={[
        "'avatar''more''skills''about'",
        "'avatar''more''skills''about'",
        "'avatar''more''skills''about'",
        "'avatar more''skills skills''about about'",
      ]}
      gap={4}
      padding={[4, 8, 8, 8]}
      gridTemplateColumns={[
        '100% 100% 100%',
        '100% 100% 100%',
        '100% 100% 100%',
        'minmax(600px, 450px) minmax(300px, 1fr)',
      ]}
    >
      <RoundedBox gridArea="avatar">
        <Grid
          templateAreas={[
            "'avatar''about'",
            "'avatar about'",
            "'avatar about'",
            "'avatar about'",
          ]}
          gridTemplateColumns={[
            '1fr',
            'minmax(114px, 122px) 1fr',
            'minmax(114px, 122px) 1fr',
            'minmax(114px, 122px) 1fr',
          ]}
        >
          <Avatar
            gridArea="avatar"
            src={githubProfile.avatar_url}
            marginBottom={[4, 4, 0, 0]}
            marginX={['auto', 'auto', 0, 0]}
            style={{
              height: '25vw',
              width: '25vw',
              maxWidth: '114px',
              maxHeight: '114px',
              border: '4px solid #46D8A9',
              padding: 6,
              backgroundColor: 'transparent',
            }}
          />
          <Flex
            justifyContent="center"
            flexDirection="column"
            paddingLeft={4}
            gridArea="about"
            alignItems={['center', 'flex-start', 'flex-start', 'flex-start']}
          >
            <Heading as="h2" size="lg" letterSpacing="0.8px" fontWeight={600}>
              {githubProfile.name}
            </Heading>
            <Heading
              as="h3"
              size="sm"
              fontWeight={400}
              letterSpacing="0.8px"
              marginBottom={2}
            >
              Desenvolvedor Full-Stack
            </Heading>
            <Heading
              as="h4"
              size="xs"
              fontWeight={400}
              fontStyle="italic"
              marginBottom={4}
            >
              {`"${githubProfile.bio}"`}
            </Heading>
            <Grid
              templateAreas="
                'input1 input2 input3'
              "
              gap={2}
            >
              <LinkButton href="https://github.com/devleonardorabelo">
                <GitHub />
              </LinkButton>
              <LinkButton href="https://www.linkedin.com/in/leonardomrabelo/">
                <LinkedIn />
              </LinkButton>
              <LinkButton href="mailto:devleonardorabelo@gmail.com">
                <Mail />
              </LinkButton>
            </Grid>
          </Flex>
        </Grid>
      </RoundedBox>
      <RoundedBox gridArea="more">
        <Heading size="md" marginBottom={4}>
          Projetos desenvolvidos
        </Heading>
        <Link className="linkButton" href="http">
          <img src="/icons/carpede.svg" alt="" />
          <p>Carpede</p>
        </Link>
        <Link className="linkButton" href="http">
          <img src="/icons/pluginzap.svg" alt="" />
          <p>PluginZap</p>
        </Link>
      </RoundedBox>
      <RoundedBox gridArea="skills">
        <Grid
          templateAreas={[
            "'mainSkills' 'otherSkills'",
            "'mainSkills' 'otherSkills'",
            "'mainSkills' 'otherSkills'",
            "'mainSkills otherSkills'",
          ]}
        >
          <Flex flexDirection="column" gridArea="mainSkills" marginBottom={8}>
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
      <RoundedBox gridArea="about">
        <Heading size="md" marginBottom={4}>
          Sobre
        </Heading>
        <Text marginBottom={8}>
          Olá! Eu sou o Leonardo, tenho 25 anos e sou de Brasília. Atualmente
          estou trabalhando em meus projetos particulares e também estudando
          diariamente para me aperfeiçoar na stack que utilizo.
        </Text>
        <Heading size="md" marginBottom={4}>
          No que acredito
        </Heading>
        <Text marginBottom={8}>
          Acredito que o esforço é a principal chave para o crescimento e quando
          feito em conjunto, o resultado é superior ao que foi planejado.
          Acredito também que cada experiência é uma troca, onde sou bastante
          grato às oportunidades que me foram dadas ao decorrer desses anos.
        </Text>
        <Heading size="md" marginBottom={4}>
          Experiência
        </Heading>
        <Text marginBottom={8}>
          Desenvolvo profissionalmente há cerca de 5 anos, sempre como
          freelancer. Trabalhei durante 3 anos exclusivamente como front-end em
          desenvolvimento web. Pela necessidade de independência, me tornei
          desenvolvedor full stack, utilizando as tecnologias derivadas do
          javascript, como NodeJS no back-end e o React para o front-end. No
          último ano, coloquei dois projetos particulares no ar que estão
          citados acima na sessão de projetos, onde um deles, sendo a Carpede,
          como principal. No momento parei minha carreira para focar
          exclusivamente em meus estudos das novas tecnologias e procurar novas
          oportunidades.
        </Text>
      </RoundedBox>
    </Grid>
  );
};

export default Home;
