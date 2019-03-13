import { MediaObject } from 'api/MediaObject';
import { createContext } from 'react';

interface GlobalState {
  fullScreenData: FullscreenData;
  fullScreenOpened: boolean;
  setFullScreenData?: (props: FullscreenData) => void;
  toggleFullscreen?: (value: boolean) => void;
}

export interface FullscreenData {
  index: number;
  rawData?: MediaObject;
}

export const StateContext = createContext<GlobalState>({
  fullScreenOpened: false,
  fullScreenData: { index: -1, rawData: undefined },
});
