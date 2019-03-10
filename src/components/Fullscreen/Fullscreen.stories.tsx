import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Fullscreen } from './Fullscreen';

storiesOf('<Fullscreen>', module)
  .add('basic', () => {
    const opened = boolean('opened', true);

    return (
      <Fullscreen
        opened={opened}
        toggleFullscreen={alert}
        data={{
          alt: 'Very Cute Picture',
          sizes: `(max-width: 320px) 280px,
      (max-width: 480px) 440px,
      800px`,
          src: `https://source.unsplash.com/random`,
          srcSet: `https://source.unsplash.com/random 320w,
          https://source.unsplash.com/random 480w,
          https://source.unsplash.com/random 800w`,
        }}
      />
    );
  })
  .addDecorator(withKnobs);
