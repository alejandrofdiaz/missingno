import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Loader } from './Loader';

storiesOf('<Loader/>', module)
  .add('basic', () => {
    const opened = boolean('opened', true);
    return <Loader isOpen={opened} />;
  })
  .addDecorator(withKnobs);
