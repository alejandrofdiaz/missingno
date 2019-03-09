import * as React from 'react';

import { Gallery } from './Gallery/Gallery';
import { Picture } from './Picture/Picture';

export const App = () => (
  <h1>
    My App
    <Gallery>
      <Picture src="https://via.placeholder.com/150" />
      <Picture src="https://via.placeholder.com/150" />
      <Picture src="https://via.placeholder.com/150" />
    </Gallery>
  </h1>
);
