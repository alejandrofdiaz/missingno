import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Fullscreen } from './Fullscreen';

storiesOf('<Fullscreen>', module)
  .add('basic', () => {
    const opened = boolean('opened', true);

    return <Fullscreen opened={opened} toggleFullscreen={alert} />;
  })
  .addDecorator(withKnobs);
