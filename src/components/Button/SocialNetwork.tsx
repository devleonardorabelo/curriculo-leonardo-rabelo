import React from 'react';
import { Box, Button } from '@chakra-ui/core';
import styles from './Button.module.css';

interface Props {
  children?: React.ReactNode;
  action: (e) => void;
}

const SocialNetwork: React.FC<Props> = ({
  children,
  action,
  ...props
}: Props) => (
  <Button variant="outline">
    <Box>{children}</Box>
  </Button>
);

SocialNetwork.defaultProps = {
  children: 'Enviar',
};

export default SocialNetwork;
