import React from 'react';
import { Button } from '@chakra-ui/core';

interface Props {
  children?: React.ReactNode;
  action: (e) => void;
}

const RoundedButton: React.FC<Props> = ({
  children,
  action,
  ...props
}: Props) => (
  <Button onClick={action} {...props}>
    {children}
  </Button>
);

RoundedButton.defaultProps = {
  children: 'Enviar',
};

export default RoundedButton;
