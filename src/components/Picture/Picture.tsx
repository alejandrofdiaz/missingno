import * as React from 'react';

import { DefaultCopies } from '../../lib/const';

import PictureStylesScss from './Picture.styles.scss';

interface Picture {
  alt: string;
  src: string;
}

export const Picture = ({ src, alt }: Picture) => (
  <img className={PictureStylesScss.picture} src={src} alt={alt} />
);

Picture.defaultProps = {
  alt: DefaultCopies.ALT_DESCRIPTION,
};
