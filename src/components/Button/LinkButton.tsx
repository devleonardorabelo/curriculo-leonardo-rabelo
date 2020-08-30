import React from 'react';
import { Box, Button } from '@chakra-ui/core';

interface Props {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<Props> = ({ children, href, ...props }: Props) => (
  <Button variant="outline" {...props} onClick={() => window.open(href)}>
    <Box>{children}</Box>
  </Button>
);

export default LinkButton;
