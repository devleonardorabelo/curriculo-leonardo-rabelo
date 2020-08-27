import React from 'react';
import { Box, PseudoBox } from '@chakra-ui/core';

interface Props {
  children: React.ReactNode;
  gridArea?: string;
  width?: string;
}

const RoundedBox: React.FC<Props> = ({ children, ...props }: Props) => (
  <Box>
    <PseudoBox
      {...props}
      backgroundColor="gray.800"
      padding={4}
      borderRadius="md"
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

RoundedBox.defaultProps = {
  gridArea: null,
  width: 'auto',
};

export default RoundedBox;
