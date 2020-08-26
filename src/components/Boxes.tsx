import React from 'react';
import { Box, PseudoBox } from '@chakra-ui/core';

export interface Props {
  children?: JSX.Element;
  gridArea?: string;
}

export const RoundedBox: React.FC<Props> = ({ children, gridArea }: Props) => (
  <Box>
    <PseudoBox
      backgroundColor="gray.800"
      padding={4}
      borderRadius="md"
      gridArea={gridArea}
      _hover={{
        borderColor: 'gray.200',
        marginTop: -2,
        boxShadow: 'inset 0px 0px 0px 2px #01E3A1',
        transition: '400ms',
      }}
    >
      {children}
    </PseudoBox>
  </Box>
);
