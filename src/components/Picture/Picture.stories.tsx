import { storiesOf } from '@storybook/react';
import React from 'react';

import { MediaObjectMock } from '../../../.storybook/mocks/mediaObject';

import { Picture } from './Picture';

storiesOf('<Picture>', module).add('basic', () => (
  <Picture
    alt="test"
    src="https://via.placeholder.com/150"
    currentIndex={1}
    id="1"
    rawData={MediaObjectMock}
  />
));
