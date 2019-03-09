import * as React from 'react';

import GalleryClassName from './Gallery.styles.scss';

interface Gallery {
  children: React.ReactNode;
  className?: string;
}

export const Gallery = ({ className, children }: Gallery) => (
  <div className={[GalleryClassName.gallery, ...[className!]].join(' ')}>
    {children}
  </div>
);
