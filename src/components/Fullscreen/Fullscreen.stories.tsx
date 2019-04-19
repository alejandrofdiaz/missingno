import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Fullscreen } from './Fullscreen';

storiesOf('<Fullscreen/>', module)
  .add('basic', () => {
    const opened = boolean('opened', true);

    return (
      <Fullscreen
        onNext={() => alert('Next pressed!')}
        onPrevious={() => alert('Previous pressed!')}
        opened={opened}
        toggleFullscreen={alert}
        data={{
          date: new Date(),
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
