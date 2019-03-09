import { storiesOf } from '@storybook/react';
import React from 'react';

import { Picture } from './Picture';

storiesOf('<Picture>', module).add('basic', () => (
  <Picture alt="test" src="https://via.placeholder.com/150" />
));
