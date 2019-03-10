import { MediaObject } from 'api/MediaObject';

const MEDIA_BREAKPOINT = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const getMediaSrcSet = ({
  alt_text,
  media_details: { sizes },
}: MediaObject) => ({
  srcSet: `
    ${sizes.medium.source_url} ${sizes.medium.width}w,
    ${sizes.large.source_url} ${sizes.large.width}w,
    ${sizes.full.source_url} ${sizes.full.width}w
  `,
  sizes: `
    (max-width: ${MEDIA_BREAKPOINT.sm}) ${sizes.medium.width}px,
    (max-width: ${MEDIA_BREAKPOINT.md}) ${sizes.large.width}px,
    ${sizes.full.width}px,
  `,
  alt: alt_text,
  src: sizes.full.source_url,
});
