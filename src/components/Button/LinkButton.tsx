import React from 'react';
import { Box, Button } from '@chakra-ui/core';

interface Props {
  children?: React.ReactNode;
  action: (e) => void;
}

const LinkButton: React.FC<Props> = ({ children, action, ...props }: Props) => (
  <Button variant="outline">
    <Box>{children}</Box>
  </Button>
);

LinkButton.defaultProps = {
  children: 'Enviar',
};

export default LinkButton;
