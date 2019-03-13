import { api } from 'api/base';
import { MediaObject } from 'api/MediaObject';
import React, { useEffect, useState } from 'react';
import { FullscreenData, StateContext } from 'state/state';
import { monthSortCallback } from 'utils/gallerySortCallback';

import { Container } from './Container/Container';
import { FullscreenWithContext } from './Fullscreen/Fullscreen';
import { Gallery } from './Gallery/Gallery';
import { PictureWithContext } from './Picture/Picture';

export const App: React.FunctionComponent = () => {
  const [initialized, setInitialized] = useState(false);
  const [fullScreenOpened, toggleFullscreen] = useState(false);
  const [pictureData, setPictureData] = useState<MediaObject[]>([]);
  const [fullScreenData, setFullScreenData] = useState<FullscreenData>({
    index: -1,
    rawData: undefined,
  });

  useEffect(() => {
    if (!initialized) {
      api.media().then((response) => {
        setPictureData(response);
      });
    }
    setInitialized(true);
  }, [initialized]);

  const onNext = (currentIndex: number) => {
    const followingIndex = currentIndex + 1;
    const nextPicture = pictureData[followingIndex];
    if (!!nextPicture) {
      setFullScreenData({ rawData: nextPicture, index: followingIndex });
    }
  };

  const onPrevious = (currentIndex: number) => {
    const followingIndex = currentIndex - 1;
    const previousPicture = pictureData[followingIndex];
    if (!!previousPicture) {
      setFullScreenData({ rawData: previousPicture, index: followingIndex });
    }
  };

  return (
    <StateContext.Provider
      value={{
        setFullScreenData,
        fullScreenOpened,
        toggleFullscreen,
        fullScreenData,
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
              currentIndex={index}
              rawData={pictureData[index]}
            />
          ))}
        </Gallery>
        <FullscreenWithContext onNext={onNext} onPrevious={onPrevious} />
      </Container>
    </StateContext.Provider>
  );
};
