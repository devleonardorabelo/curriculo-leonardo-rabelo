import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Montserrat',
    heading: 'Montserrat',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    ...theme.fontSizes,
    '6xl': '64px',
    '5xl': '52px',
    '4xl': '40px',
  },
  radii: {
    ...theme.radii,
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      500: '#19304D',
    },
  },
};

export default customTheme;
