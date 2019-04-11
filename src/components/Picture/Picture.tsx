import { MediaObject } from 'api/MediaObject';
import { DefaultCopies } from 'lib/const';
import * as React from 'react';
import { StateContext } from 'state/state';
import { Omit } from 'utility-types';
import { noop } from 'utils/noop';

import PictureStylesScss from './Picture.styles.scss';

export interface PictureProps {
  alt: string;
  currentIndex: number;
  date: Date;
  id: string | number;
  onClick: (id: string | number) => void;
  rawData?: MediaObject;
  src: string;
}

export const Picture = ({ src, alt, onClick, id }: PictureProps) => (
  <div className={PictureStylesScss.wrapper}>
    <button
      type="button"
      className={PictureStylesScss.moreButton}
      onClick={() => onClick(id)}
    >
      <img className={PictureStylesScss.picture} src={src} alt={alt} />
    </button>
  </div>
);

Picture.defaultProps = {
  alt: DefaultCopies.ALT_DESCRIPTION,
  id: 'unknown',
  onClick: noop,
  date: new Date(),
  currentIndex: -1,
};

Picture.displayName = 'Picture';

export const PictureWithContext = (props: Omit<PictureProps, 'onClick'>) => {
  const { setFullScreenData, toggleFullscreen } = React.useContext(
    StateContext,
  );

  const onClick = React.useCallback(() => {
    setFullScreenData!({ rawData: props.rawData!, index: props.currentIndex });
    toggleFullscreen!(true);
  }, [props.currentIndex]);

  return <Picture {...props} onClick={onClick} />;
};
