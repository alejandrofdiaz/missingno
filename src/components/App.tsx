import { api } from 'api/base';
import { MediaObject } from 'api/MediaObject';
import React, { useEffect, useState } from 'react';
import { StateContext } from 'state/state';
import { monthSortCallback } from 'utils/gallerySortCallback';
import { getMediaSrcSet } from 'utils/getMediaSrc';

import { Container } from './Container/Container';
import { FullscreenWithContext } from './Fullscreen/Fullscreen';
import { Gallery } from './Gallery/Gallery';
import { PictureWithContext } from './Picture/Picture';
export const App: React.FunctionComponent = () => {
  const [initialized, setInitialized] = useState(false);
  const [fullScreenOpened, toggleFullscreen] = useState(false);
  const [pictureData, setPictureData] = useState<MediaObject[]>([]);
  const [fullScreenData, setFullScreenData] = useState<
    ReturnType<typeof getMediaSrcSet>
  >();

  useEffect(() => {
    if (!initialized) {
      api.media().then((response) => {
        setPictureData(response);
      });
    }
    setInitialized(true);
  }, [initialized]);

  return (
    <StateContext.Provider
      value={{
        setFullScreenData,
        fullScreenData,
        fullScreenOpened,
        toggleFullscreen,
      }}
    >
      <Container>
        <h1>My App</h1>
        <Gallery sortCallback={monthSortCallback}>
          {pictureData.map(({ source_url, date_gmt, id, alt_text }, index) => (
            <PictureWithContext
              src={source_url}
              alt={alt_text}
              date={new Date(date_gmt)}
              key={id}
              id={id}
              rawData={getMediaSrcSet(pictureData[index])}
            />
          ))}
        </Gallery>
        <FullscreenWithContext />
      </Container>
    </StateContext.Provider>
  );
};
