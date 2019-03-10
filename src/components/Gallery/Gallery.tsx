import * as React from 'react';

import GalleryStylesScss from './Gallery.styles.scss';

interface Gallery {
  children: React.ReactNode;
  className?: string;
}

export const Gallery = ({ className, children }: Gallery) => (
  <div className={[GalleryStylesScss.gallery, ...[className]].join(' ')}>
    {children}
  </div>
);
