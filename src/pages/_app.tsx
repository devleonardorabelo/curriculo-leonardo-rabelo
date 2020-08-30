import React from 'react';
import { AppProps } from 'next/app';
import { Box } from '@chakra-ui/core';

import { ProfileProvider } from '../contexts/profile';
import ThemeContainer from '../contexts/theme/ThemeContainer';

import './styles.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ProfileProvider>
      <ThemeContainer>
        <Box backgroundColor="gray.900" minHeight="100vh">
          <Component {...pageProps} />
        </Box>
      </ThemeContainer>
    </ProfileProvider>
  );
};

export default MyApp;
