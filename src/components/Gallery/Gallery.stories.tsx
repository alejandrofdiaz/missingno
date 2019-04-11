import { storiesOf } from '@storybook/react';
import React from 'react';
import { monthSortCallback } from 'utils/gallerySortCallback';

import { Picture } from '../Picture/Picture';

import { Gallery } from './Gallery';

storiesOf('<Gallery>', module).add('basic', () => (
  <Gallery sortCallback={monthSortCallback}>
    <Picture
      alt="test"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/150"
    />
    <Picture
      alt="test1"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/160"
    />
    <Picture
      alt="test2"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/150"
    />
    <Picture
      alt="test3"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/110"
    />
    <Picture
      alt="test4"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/180"
    />
    <Picture
      alt="test5"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/160"
    />
    <Picture
      alt="test6"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/150"
    />
    <Picture
      alt="test7"
      date={new Date(1, 2, 3)}
      src="https://via.placeholder.com/110"
    />

    <Picture
      alt="test"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/150"
    />
    <Picture
      alt="test1"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/160"
    />
    <Picture
      alt="test2"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/150"
    />
    <Picture
      alt="test3"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/110"
    />
    <Picture
      alt="test4"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/180"
    />
    <Picture
      alt="test5"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/160"
    />
    <Picture
      alt="test6"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/150"
    />
    <Picture
      alt="test7"
      date={new Date(1, 5, 3)}
      src="https://via.placeholder.com/110"
    />
  </Gallery>
));
