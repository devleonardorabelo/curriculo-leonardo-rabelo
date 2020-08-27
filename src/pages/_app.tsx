import React from 'react';
import { AppProps } from 'next/app';
import { Box } from '@chakra-ui/core';

import ThemeContainer from '../contexts/theme/ThemeContainer';

import './styles.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContainer>
      <Box backgroundColor="gray.900" minHeight="100vh">
        <Component {...pageProps} />
      </Box>
    </ThemeContainer>
  );
};

export default MyApp;
