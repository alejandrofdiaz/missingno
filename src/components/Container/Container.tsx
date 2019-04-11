import React from 'react';

import ContainerStylesScss from './Container.styles.scss';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={ContainerStylesScss.container}>{children}</div>
);
Container.displayName = 'Container';
