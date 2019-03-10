import { createContext } from 'react';
import { getMediaSrcSet } from 'utils/getMediaSrc';

interface GlobalState {
  fullScreenData?: ReturnType<typeof getMediaSrcSet>;
  fullScreenOpened: boolean;
  setFullScreenData?: (value: ReturnType<typeof getMediaSrcSet>) => void;
  toggleFullscreen?: (value: boolean) => void;
}

export const StateContext = createContext<GlobalState>({
  fullScreenOpened: false,
});
