import { MediaObject } from 'api/MediaObject';
import { createContext } from 'react';
import { noop } from 'utils/noop';

interface GlobalState {
  fullScreenData: FullscreenData;
  fullScreenOpened: boolean;
  pictureData: MediaObject[];
  setFullScreenData: (props: FullscreenData) => void;
  setPictureData: (pictures: MediaObject[]) => void;
  toggleFullscreen: (value: boolean) => void;
}

export interface FullscreenData {
  index: number;
  rawData?: MediaObject;
}

export const StateContext = createContext<GlobalState>({
  pictureData: [],
  fullScreenOpened: false,
  fullScreenData: { index: -2, rawData: undefined },
  setFullScreenData: noop,
  setPictureData: noop,
  toggleFullscreen: noop,
});
