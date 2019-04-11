import { getMediaSrcSet } from './getMediaSrc';

describe('getMediaSrcSet', () => {
  let result: any; // tslint:disable-line no-any
  beforeEach(() => {
    result = getMediaSrcSet({
      alt_text: 'altTextTest',
      media_details: {
        sizes: {
          full: {
            source_url: 'fullSourceUrl',
            width: 200,
          },
          medium: {
            source_url: 'mediumSourceUrl',
            width: 150,
          },
          large: {
            source_url: 'largeSourceUrl',
            width: 175,
          },
        },
      },
    } as any); // tslint:disable-line no-any
  });

  it('should return alt test', () => {
    expect(result.alt).toBe('altTextTest');
  });
  it('should return src url', () => {
    expect(result.src).toBe('fullSourceUrl');
  });
  it('should return src set values', () => {
    expect(result.srcSet).toContain('fullSourceUrl 200w');
    expect(result.srcSet).toContain('mediumSourceUrl 150w');
    expect(result.srcSet).toContain('largeSourceUrl 175w');
  });

  it('should return sizes value', () => {
    expect(result.sizes).toContain('(max-width: 576px) 150px');
    expect(result.sizes).toContain('(max-width: 768px) 175px');
    expect(result.sizes).toContain('200px');
  });
});
