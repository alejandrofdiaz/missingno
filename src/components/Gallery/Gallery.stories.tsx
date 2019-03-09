import { storiesOf } from '@storybook/react';
import React from 'react';

import { Picture } from '../Picture/Picture';

import { Gallery } from './Gallery';

storiesOf('<Gallery>', module).add('basic', () => (
  <Gallery>
    <Picture alt="test" src="https://via.placeholder.com/150" />
  </Gallery>
));
