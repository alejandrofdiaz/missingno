import { MediaObject } from 'api/MediaObject';
import { createContext } from 'react';
import { noop } from 'utils/noop';

interface GlobalState {
  fullScreenData: FullscreenData;
  fullScreenOpened: boolean;
  loaderOpened: boolean;
  pictureData: MediaObject[];
  setFullScreenData: (props: FullscreenData) => void;
  setPictureData: (pictures: MediaObject[]) => void;
  toggleFullscreen: (value: boolean) => void;
  toggleLoader: (value: boolean) => void;
}

export interface FullscreenData {
  index: number;
  rawData?: MediaObject;
}

export const StateContext = createContext<GlobalState>({
  loaderOpened: false,
  pictureData: [],
  fullScreenOpened: false,
  fullScreenData: { index: -2, rawData: undefined },
  setFullScreenData: noop,
  setPictureData: noop,
  toggleFullscreen: noop,
  toggleLoader: noop,
});
