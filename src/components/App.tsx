import { api } from 'api/base';
import { MediaObject } from 'api/MediaObject';
import React, { useEffect, useState } from 'react';
import { monthSortCallback } from 'utils/gallerySortCallback';

import { Container } from './Container/Container';
import { Gallery } from './Gallery/Gallery';
import { Picture } from './Picture/Picture';

export const App: React.FunctionComponent = () => {
  const [initialized, setInitialized] = useState(false);
  const [pictureData, setPictureData] = useState<MediaObject[]>([]);

  useEffect(() => {
    if (!initialized) {
      api.media().then((response) => {
        setPictureData(response);
      });
    }
    setInitialized(true);
  }, [initialized]);

  return (
    <Container>
      <h1>My App</h1>
      <Gallery sortCallback={monthSortCallback}>
        {pictureData.map(({ source_url, date_gmt, id, alt_text }) => (
          <Picture
            src={source_url}
            alt={alt_text}
            date={new Date(date_gmt)}
            key={id}
            id={id}
          />
        ))}
      </Gallery>
    </Container>
  );
};
