import * as React from 'react';

import FooterStylesScss from './Footer.styles.scss';

interface FooterElementProps {
  href?: string;
  title: string;
}

export const FooterElement = ({ href, title }: FooterElementProps) => (
  <li className={FooterStylesScss.element}>
    {href ? (
      <a
        className={FooterStylesScss.link}
        href={href}
        title={title}
        target="_blank"
      >
        {title}
      </a>
    ) : (
      <span className={FooterStylesScss.link}> {title}</span>
    )}
  </li>
);

interface FooterProps {
  children: React.ReactChild | React.ReactChild[];
}

export const Footer = ({ children }: FooterProps) => (
  <div className={FooterStylesScss.container}>
    <ul className={FooterStylesScss.list}>{children}</ul>
  </div>
);

Footer.displayName = 'Footer';
Footer.defaultProps = {
  children: undefined,
};
