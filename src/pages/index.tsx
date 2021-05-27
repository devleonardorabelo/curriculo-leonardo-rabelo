/* eslint-disable camelcase */
import React, { useContext } from 'react';
import {
  Grid,
  Heading,
  Avatar,
  Flex,
  Link,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';
import {
  GitHub,
  LinkedIn,
  Mail,
  BorderClear,
  Code,
  ChangeHistory,
} from '@material-ui/icons';

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
        "'avatar''more''skills''moreSkills''about'",
        "'avatar''more''skills''moreSkills''about'",
        "'avatar''more''skills''moreSkills''about'",
        "'avatar more''skills skills''moreSkills moreSkills''about about'",
      ]}
      gap={4}
      padding={[4, 8, 8, 8]}
      gridTemplateColumns={[
        '100%',
        '100%',
        '100%',
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
            paddingLeft={[0, 4, 4, 4]}
            gridArea="about"
            alignItems={['center', 'flex-start', 'flex-start', 'flex-start']}
          >
            <Heading as="h2" size="lg" letterSpacing="0.8px" fontWeight={600}>
              {githubProfile.name || 'Leonardo Rabelo'}
            </Heading>
            <Heading
              as="h3"
              size="sm"
              fontWeight={400}
              letterSpacing="0.8px"
              marginBottom={2}
            >
              Front End Tech Lead at PaP
            </Heading>
            <Heading
              as="h4"
              size="xs"
              fontWeight={400}
              fontStyle="italic"
              marginBottom={4}
            >
              {githubProfile.bio || 'Carregando...'}
            </Heading>
            <Grid
              templateAreas="
                'input1 input2 input3 input4'
              "
              gap={2}
            >
              <LinkButton href="https://gitlab.com/devleonardorabelo">
                <img src="/icons/gitlab.svg" alt="" />
              </LinkButton>
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
          Trabalhando atualmente
        </Heading>
        <Link
          target="_blank"
          className="linkButton"
          href="https://play.google.com/store/apps/details?id=io.pontoaponto.motorista&hl=en"
        >
          <img src="/icons/papmotorista.svg" alt="" />
          <p>PaP Embaixador</p>
        </Link>
        <Link
          target="_blank"
          className="linkButton"
          href="https://play.google.com/store/apps/details?id=io.pontoaponto.passageiro&hl=en"
        >
          <img src="/icons/pappassageiro.svg" alt="" />
          <p>PaP Passageiro</p>
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
            <Link
              target="_blank"
              className="linkButton"
              href="https://reactnative.dev"
            >
              <img src="/icons/reactnative.svg" alt="" />
              <p>React Native</p>
            </Link>

            <Link
              target="_blank"
              className="linkButton"
              href="https://reactjs.org"
            >
              <img src="/icons/react.svg" alt="" />
              <p>React JS</p>
            </Link>

            <Link
              target="_blank"
              className="linkButton"
              href="https://www.typescriptlang.org"
            >
              <img src="/icons/icons8-typescript.svg" alt="" />
              <p>Typescript</p>
            </Link>

            <Link
              target="_blank"
              className="linkButton"
              href="https://redux.js.org"
            >
              <img src="/icons/redux.svg" alt="" />
              <p>Redux</p>
            </Link>

            <Link
              target="_blank"
              className="linkButton"
              href="https://www.mongodb.com"
            >
              <img src="/icons/figma.svg" alt="" />
              <p>Figma</p>
            </Link>
          </Flex>
          <Flex flexDirection="column" gridArea="otherSkills">
            <Heading size="md" marginBottom={4}>
              Outras Habilidades
            </Heading>

            <Link
              target="_blank"
              className="linkButton"
              href="http://appcenter.ms"
            >
              <img src="/icons/appcenter.svg" alt="" />
              <p>App Center</p>
            </Link>

            <Link
              target="_blank"
              className="linkButton"
              href="https://firebase.google.com"
            >
              <img src="/icons/firebase.svg" alt="" />
              <p>Firebase</p>
            </Link>
            <Link
              target="_blank"
              className="linkButton"
              href="https://nodejs.org/en/"
            >
              <img src="/icons/icons8-node-js.svg" alt="" />
              <p>Node JS</p>
            </Link>

            <Link
              target="_blank"
              className="linkButton"
              href="https://dashboard.heroku.com"
            >
              <img src="/icons/icons8-heroku.svg" alt="" />
              <p>Heroku</p>
            </Link>

            <Link
              target="_blank"
              className="linkButton"
              href="https://git-scm.com"
            >
              <img src="/icons/icons8-git.svg" alt="" />
              <p>Git / Gitflow</p>
            </Link>
          </Flex>
        </Grid>
      </RoundedBox>
      <RoundedBox gridArea="moreSkills">
        <Heading size="md" marginBottom={4}>
          Conhecimentos Gerais
        </Heading>
        <List>
          <ListItem marginBottom={4}>
            <ListIcon icon={Code} color="#01E3A1" />
            Javascript
          </ListItem>
          <ListItem marginBottom={4}>
            <ListIcon icon={Code} color="#01E3A1" />
            HTML5
          </ListItem>
          <ListItem marginBottom={4}>
            <ListIcon icon={Code} color="#01E3A1" />
            CSS3
          </ListItem>
          <ListItem marginBottom={4}>
            <ListIcon icon={BorderClear} color="#01E3A1" />
            UI / UX
          </ListItem>
          <ListItem marginBottom={4}>
            <ListIcon icon={ChangeHistory} color="#01E3A1" />
            Prototipagem (Figma, Adobe XD)
          </ListItem>
        </List>
      </RoundedBox>
      <RoundedBox gridArea="about">
        <Heading size="md" marginBottom={4}>
          Sobre
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
          Trabalho com desenvolvimento web desde 2013, onde criei a minha
          própria agência digital para criar e vender demandas para as empresas.
          Nesta experiência, tive muito contato direto com a necessidade do
          cliente final e adquiri toda a experiência de gestão de um projeto.
          Atualmente sou Tech Lead na PaP, onde sou o responsável pelo
          desenvolvimento e sustentação de dois aplicativo de mobilidade, sendo
          um destinado aos motoristas e o outro aos passageiros.
        </Text>
        <Heading size="md" marginBottom={4}>
          Objetivos
        </Heading>
        <Text marginBottom={8}>
          Tenho como objetivo pessoal participar de projetos que darão impacto
          na sociedade, gosto de pensar que participarei de algo que vai ser
          útil e bastante utilizado, onde eu possa sentir orgulho de dizer que
          eu fiz parte daquilo.
        </Text>
      </RoundedBox>
    </Grid>
  );
};

export default Home;
