import { DefaultCopies } from 'lib/const';
import * as React from 'react';
import { noop } from 'utils/noop';

import PictureStylesScss from './Picture.styles.scss';

interface PictureProps {
  alt: string;
  id: string;
  onClick: (id: string) => void;
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
};
