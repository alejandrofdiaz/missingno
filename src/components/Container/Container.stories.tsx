import { storiesOf } from '@storybook/react';
import { Gallery } from 'components/Gallery/Gallery';
import { Picture } from 'components/Picture/Picture';
import React from 'react';

import { MediaObjectMock } from '../../../.storybook/mocks/mediaObject';

import { Container } from './Container';

storiesOf('<Container>', module).add('basic', () => (
  <Container>
    <Gallery>
      <Picture
        alt="test"
        src="https://via.placeholder.com/150"
        rawData={MediaObjectMock}
      />
    </Gallery>
  </Container>
));
