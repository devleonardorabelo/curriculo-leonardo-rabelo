import React from 'react';
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
  <a className={styles.socialNetwork} {...props}>
    {children}
  </a>
);

SocialNetwork.defaultProps = {
  children: 'Enviar',
};

export default SocialNetwork;
