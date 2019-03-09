import React, { useEffect, useState } from 'react';

import { api } from '../api/base';

import { Gallery } from './Gallery/Gallery';
import { Picture } from './Picture/Picture';

export const App: React.FunctionComponent = () => {
  const [initialized, setInitialized] = useState(false);
  const [pictureData, setPictureData] = useState<any[]>([]);

  useEffect(() => {
    if (!initialized) {
      api.media().then((response) => {
        setPictureData(response);
      });
    }
    setInitialized(true);
  }, [initialized]);

  return (
    <h1>
      My App
      <Gallery>
        {pictureData.map((data) => (
          <Picture src={data.source_url} />
        ))}
      </Gallery>
    </h1>
  );
};
