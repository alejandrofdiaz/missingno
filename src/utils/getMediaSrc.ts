import { MediaObject } from 'api/MediaObject';

const MEDIA_BREAKPOINT = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const getMediaSrcSet = (mediaObject: MediaObject) => {
  if (!mediaObject) {
    return;
  }
  const {
    date_gmt,
    alt_text,
    media_details: {
      sizes: { medium, large, full },
    },
  } = mediaObject;


  const safeSizes = {
    medium,
    large: large || medium,
    full: full || medium,
  };

  return {
    srcSet: `
    ${safeSizes.medium.source_url} ${safeSizes.medium.width}w,
    ${safeSizes.large.source_url} ${safeSizes.large.width}w,
    ${safeSizes.full.source_url} ${safeSizes.full.width}w
  `,
    sizes: `
    (max-width: ${MEDIA_BREAKPOINT.sm}) ${safeSizes.medium.width}px,
    (max-width: ${MEDIA_BREAKPOINT.md}) ${safeSizes.large.width}px,
    ${safeSizes.full.width}px,
  `,
    alt: alt_text,
    src: safeSizes.full.source_url,
    date: new Date(date_gmt),
  };
};
