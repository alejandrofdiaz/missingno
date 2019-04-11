export interface MediaObject {
  alt_text: string;
  date_gmt: string;
  id: number;
  media_details: {
    file: string;
    height: number;
    sizes: Record<
      'thumbnail' | 'medium' | 'medium_large' | 'large' | 'full',
      MediaSizes
    >;
    width: number;
  };
  source_url: string;
  title: { rendered: string };
}

export interface MediaSizes {
  file: string;
  height: number;
  mime_type: string;
  source_url: string;
  width: number;
}
