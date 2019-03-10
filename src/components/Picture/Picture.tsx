import { DefaultCopies } from 'lib/const';
import * as React from 'react';
import { StateContext } from 'state/state';
import { Omit } from 'utility-types';
import { getMediaSrcSet } from 'utils/getMediaSrc';
import { noop } from 'utils/noop';

import PictureStylesScss from './Picture.styles.scss';

export interface PictureProps {
  alt: string;
  date: Date;
  id: string | number;
  onClick: (id: string | number) => void;
  rawData?: ReturnType<typeof getMediaSrcSet>;
  src: string;
}

export const Picture = ({ src, alt, onClick, id }: PictureProps) => (
  <div className={PictureStylesScss.wrapper}>
    <img className={PictureStylesScss.picture} src={src} alt={alt} />
    <input
      type="button"
      value="👀"
      className={PictureStylesScss.moreButton}
      onClick={() => onClick(id)}
    />
  </div>
);

Picture.defaultProps = {
  alt: DefaultCopies.ALT_DESCRIPTION,
  id: 'unknown',
  onClick: noop,
  date: new Date(),
};

Picture.displayName = 'Picture';

export const PictureWithContext = (props: Omit<PictureProps, 'onClick'>) => {
  const { setFullScreenData, toggleFullscreen } = React.useContext(
    StateContext,
  );

  const onClick = () => {
    setFullScreenData!(props.rawData!);
    toggleFullscreen!(true);
  };

  return <Picture {...props} onClick={onClick} />;
};
