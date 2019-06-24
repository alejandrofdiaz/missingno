import { MediaObject } from '../../src/api/MediaObject';
const sizes = {
  thumbnail: {
    file: 'SNAP_00007-e1555703197173-150x150.jpg',
    width: 150,
    height: 150,
    mime_type: 'image/jpeg',
    source_url: 'https://via.placeholder.com/150',
  },
  medium: {
    file: 'SNAP_00007-e1555703197173-225x300.jpg',
    width: 225,
    height: 300,
    mime_type: 'image/jpeg',
    source_url: 'https://via.placeholder.com/150',
  },
  medium_large: {
    file: 'SNAP_00007-e1555703197173-768x1024.jpg',
    width: 768,
    height: 1024,
    mime_type: 'image/jpeg',
    source_url: 'https://via.placeholder.com/150',
  },
  large: {
    file: 'SNAP_00007-e1555703197173-768x1024.jpg',
    width: 768,
    height: 1024,
    mime_type: 'image/jpeg',
    source_url: 'https://via.placeholder.com/150',
  },
  'post-thumbnail': {
    file: 'SNAP_00007-e1555703197173-1568x2091.jpg',
    width: 1568,
    height: 2091,
    mime_type: 'image/jpeg',
    source_url: 'https://via.placeholder.com/150',
  },
  full: {
    file: 'SNAP_00007-e1555703197173.jpg',
    width: 2760,
    height: 3680,
    mime_type: 'image/jpeg',
    source_url: 'https://via.placeholder.com/150',
  },
};

export const MediaObjectMock: MediaObject = {
  alt_text: 'test',
  date_gmt: '',
  id: 1,
  source_url: 'https://via.placeholder.com/150',
  title: { rendered: 'test' },
  media_details: {
    sizes,
    file: '',
    height: 12,
    width: 12,
  },
};
