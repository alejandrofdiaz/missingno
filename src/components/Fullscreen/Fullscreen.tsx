import React, { useContext } from 'react';
import { StateContext } from 'state/state';
import useKey from 'use-key-hook';
import { getMediaSrcSet } from 'utils/getMediaSrc';
import { noop } from 'utils/noop';

import FullscreenStylesScss from './Fullscreen.styles.scss';

interface FullscreenProps {
  currentIndex: number;
  data?: ReturnType<typeof getMediaSrcSet>;
  onNext: (id: number) => void;
  onPrevious: (id: number) => void;
  opened: boolean;
  toggleFullscreen: (value: boolean) => void;
}

export const Fullscreen = ({
  opened,
  toggleFullscreen,
  onNext,
  onPrevious,
  data,
  currentIndex,
}: FullscreenProps) => {
  useKey(
    (pressedKey: number) => {
      switch (pressedKey) {
        case 37:
          onPrevious(currentIndex);
          break;
        case 39:
          onNext(currentIndex);
          break;
        case 27:
          toggleFullscreen(false);
          break;
        default:
          return;
      }
    },
    { detectKeys: [37, 39, 27] },
    {
      dependencies: [currentIndex],
    },
  );

  return (
    <div
      className={[
        FullscreenStylesScss.fullscreenWrapper,
        ...(opened ? [FullscreenStylesScss.fullscreenOpened] : []),
      ].join(' ')}
    >
      <div className={FullscreenStylesScss.fullscreen}>
        {!!data && (
          <div className={FullscreenStylesScss.fullscreenImageWrapper}>
            <input
              className={`${FullscreenStylesScss.fullscreenDirection} ${
                FullscreenStylesScss.fullscreenDirectionPrevious
              }`}
              type="button"
              onClick={() => {
                onPrevious(currentIndex);
              }}
            />
            <input
              className={`${FullscreenStylesScss.fullscreenDirection} ${
                FullscreenStylesScss.fullscreenDirectionNext
              }`}
              type="button"
              onClick={() => {
                onNext(currentIndex);
              }}
            />
            <img
              className={FullscreenStylesScss.fullscreenBody}
              srcSet={data!.srcSet}
              src={data!.src}
              alt={data!.alt}
              sizes={data!.sizes}
            />
          </div>
        )}
        {!!data && (
          <div className={FullscreenStylesScss.fullscreenData}>
            <p className={FullscreenStylesScss.fullscreenField}>{data!.alt}</p>
            <p className={FullscreenStylesScss.fullscreenField}>
              {data!.date.toLocaleDateString()}
            </p>
          </div>
        )}
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
  currentIndex: -1,
  onNext: noop,
  onPrevious: noop,
};

type FullscreenWithContextOwnProps = Pick<
  FullscreenProps,
  'onNext' | 'onPrevious'
>;

export const FullscreenWithContext = (props: FullscreenWithContextOwnProps) => {
  const Context = useContext(StateContext);
  return (
    <Fullscreen
      {...props}
      currentIndex={Context.fullScreenData.index}
      data={getMediaSrcSet(Context.fullScreenData.rawData!)}
      opened={Context.fullScreenOpened}
      toggleFullscreen={Context.toggleFullscreen || noop}
    />
  );
};

FullscreenWithContext.displayName = 'FullscreenWithContext';
