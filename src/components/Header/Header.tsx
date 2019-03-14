import * as React from 'react';

import HeaderStylesScss from './Header.styles.scss';

const APP_NAME = 'My App';

export const Header = ({ title }: { title: string }) => (
  <header className={HeaderStylesScss.container}>
    <h1 className={HeaderStylesScss.header}>{title}</h1>
  </header>
);

Header.displayName = 'Header';
Header.defaultProps = {
  title: APP_NAME,
};
