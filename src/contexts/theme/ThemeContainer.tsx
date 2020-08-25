import React from 'react';

import {
  ThemeProvider as ChakraTProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core';
import { ThemeProvider as EmotionTProvider } from 'emotion-theming';

import theme from '../../styles/theme';

interface Props {
  children: JSX.Element;
}

const ThemeContainer: React.FC<Props> = ({ children }: Props) => (
  <ChakraTProvider theme={theme}>
    <ColorModeProvider value="dark">
      <EmotionTProvider theme={theme}>
        <CSSReset />
        {children}
      </EmotionTProvider>
    </ColorModeProvider>
  </ChakraTProvider>
);

export default ThemeContainer;
