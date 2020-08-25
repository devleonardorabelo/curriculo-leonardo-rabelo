import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    body: 'Baloo Tamma 2, system-ui, sans-serif',
    heading: 'Baloo Tamma 2, system-ui, sans-serif',
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
