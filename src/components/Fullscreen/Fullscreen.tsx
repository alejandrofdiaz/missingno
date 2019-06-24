import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import React, { useContext, useEffect, useRef } from 'react';
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
  const wrapperEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (opened) {
      disableBodyScroll(wrapperEl.current!);
    } else {
      clearAllBodyScrollLocks();
    }
    return () => clearAllBodyScrollLocks();
  }, [opened, currentIndex]);

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
      ref={wrapperEl}
      className={[
        FullscreenStylesScss.fullscreenWrapper,
        ...(opened ? [FullscreenStylesScss.fullscreenOpened] : []),
      ].join(' ')}
      onClick={() => toggleFullscreen(false)}
    >
      <div className={FullscreenStylesScss.fullscreen}>
        {!!data && (
          <div
            className={FullscreenStylesScss.fullscreenImageWrapper}
            onClick={(event) => event.stopPropagation()}
          >
            <input
              className={`${FullscreenStylesScss.fullscreenDirection} ${FullscreenStylesScss.fullscreenDirectionPrevious}`}
              type="button"
              onClick={() => {
                onPrevious(currentIndex);
              }}
            />
            <input
              className={`${FullscreenStylesScss.fullscreenDirection} ${FullscreenStylesScss.fullscreenDirectionNext}`}
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

Fullscreen.displayName = 'Fullscreen';

export const FullscreenWithContext = () => {
  const Context = useContext(StateContext);
  const onNext = (currentIndex: number) => {
    const followingIndex = currentIndex + 1;
    const nextPicture = Context.pictureData[followingIndex];
    if (!!nextPicture) {
      Context.setFullScreenData!({
        rawData: nextPicture,
        index: followingIndex,
      });
    }
  };

  const onPrevious = (currentIndex: number) => {
    const followingIndex = currentIndex - 1;
    const previousPicture = Context.pictureData[followingIndex];
    if (!!previousPicture) {
      Context.setFullScreenData!({
        rawData: previousPicture,
        index: followingIndex,
      });
    }
  };

  return (
    <Fullscreen
      onNext={onNext}
      onPrevious={onPrevious}
      currentIndex={Context.fullScreenData.index}
      data={getMediaSrcSet(Context.fullScreenData.rawData!)}
      opened={Context.fullScreenOpened}
      toggleFullscreen={Context.toggleFullscreen || noop}
    />
  );
};

FullscreenWithContext.displayName = 'FullscreenWithContext';
