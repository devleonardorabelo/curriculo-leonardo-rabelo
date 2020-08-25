import React from 'react';

interface Props {
  children: JSX.Element;
}

export const RoundedBox: React.FC<Props> = ({ children }: Props) => (
  <div className="roundedBox">{children}</div>
);
