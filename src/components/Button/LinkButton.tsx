import React from 'react';
import { Box, Button } from '@chakra-ui/core';

import { ComponentProps } from '../../types';

const LinkButton: React.FC<ComponentProps> = ({
  children,
  action,
  ...props
}: ComponentProps) => (
  <Button variant="outline" {...props} onClick={action}>
    <Box>{children}</Box>
  </Button>
);

LinkButton.defaultProps = {
  children: 'Enviar',
};

export default LinkButton;
