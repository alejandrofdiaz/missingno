import React, { useContext } from 'react';
import { StateContext } from 'state/state';
import { getMediaSrcSet } from 'utils/getMediaSrc';
import { noop } from 'utils/noop';

import FullscreenStylesScss from './Fullscreen.styles.scss';

interface FullscreenProps {
  data?: ReturnType<typeof getMediaSrcSet>;
  opened: boolean;
  toggleFullscreen: (value: boolean) => void;
}

export const Fullscreen = ({ opened, toggleFullscreen }: FullscreenProps) => {
  return (
    <div
      className={[
        FullscreenStylesScss.fullscreenWrapper,
        ...(opened ? [FullscreenStylesScss.fullscreenOpened] : []),
      ].join(' ')}
    >
      <div className={FullscreenStylesScss.fullscreen}>
        <img className={FullscreenStylesScss.fullscreenBody} />
        <div className={FullscreenStylesScss.fullscreenData} />
      </div>
      <div className={FullscreenStylesScss.fullscreenLightbox} />
      <input
        className={FullscreenStylesScss.fullscreenClose}
        type="button"
        value="❌"
        onClick={() => {
          toggleFullscreen(!opened);
        }}
      />
    </div>
  );
};

Fullscreen.defaultProps = {
  opened: false,
  data: undefined,
  toggleFullscreen: noop,
};

export const FullscreenWithContext = () => {
  const Context = useContext(StateContext);
  return (
    <Fullscreen
      data={Context.fullScreenData}
      opened={Context.fullScreenOpened}
      toggleFullscreen={Context.toggleFullscreen || noop}
    />
  );
};
