import { Picture } from 'components/Picture/Picture';
import React, { Fragment } from 'react';
import { defaultSortCallback } from 'utils/gallerySortCallback';

import GalleryStylesScss from './Gallery.styles.scss';

interface GalleryRowProps {
  children: Picture;
  displayName: string;
}

export const GalleryRow = ({ children, displayName }: GalleryRowProps) => (
  <Fragment>
    <h2 className={GalleryStylesScss.galleryRowTitle}>{displayName}</h2>
    <div className={GalleryStylesScss.galleryRow}>{children}</div>
  </Fragment>
);

GalleryRow.displayName = 'GalleryRow';

interface SortedObject {
  displayName: string;
  nodes: Picture[];
}

export type SortCallback = (
  acc: Record<string, SortedObject>,
  node: Picture,
  index?: number,
) => Record<string, SortedObject>;

interface GalleryProps {
  children: Picture;
  className?: string;
  sortCallback: SortCallback;
}

export const Gallery = ({
  className,
  children,
  sortCallback,
}: GalleryProps) => {
  const sortedChildrenObject = React.Children.toArray(children).reduce<
    Record<string, SortedObject>
  >(sortCallback, {});

  const sortedChildrenArray = Object.values(sortedChildrenObject);

  return (
    <div className={[GalleryStylesScss.gallery, ...[className]].join(' ')}>
      {sortedChildrenArray.map(({ nodes, displayName }) => (
        <GalleryRow displayName={displayName} key={displayName}>
          {nodes}
        </GalleryRow>
      ))}
    </div>
  );
};

Gallery.displayName = 'Gallery';
Gallery.defaultProps = {
  sortCallback: defaultSortCallback,
};
