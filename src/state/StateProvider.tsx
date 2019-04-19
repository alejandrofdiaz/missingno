import { MediaObject } from 'api/MediaObject';
import React, { useState } from 'react';

import { FullscreenData, StateContext } from './state';

interface StateProviderProps {
  children: JSX.Element;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const [pictureData, setPictureData] = useState<MediaObject[]>([]);
  const [fullScreenOpened, toggleFullscreen] = useState(false);

  const [fullScreenData, setFullScreenData] = useState<FullscreenData>({
    index: -1,
    rawData: undefined,
  });

  return (
    <StateContext.Provider
      value={{
        pictureData,
        setPictureData,
        setFullScreenData,
        fullScreenOpened,
        toggleFullscreen,
        fullScreenData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

StateProvider.displayName = 'StateProvider';
