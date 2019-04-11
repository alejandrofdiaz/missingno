import { storiesOf } from '@storybook/react';
import React from 'react';

import { Footer, FooterElement } from './Footer';

storiesOf('<Footer/>', module).add('basic', () => {
  return (
    <Footer>
      <FooterElement href="https://twitter.com" title="twitter" />
      <FooterElement href="https://twitter.com" title="twitter" />
      <FooterElement href="https://twitter.com" title="twitter" />
      <FooterElement href="https://twitter.com" title="twitter" />
      <FooterElement href="https://twitter.com" title="twitter" />
    </Footer>
  );
});
