import wpapi from 'wpapi';

import { api } from './base';
import { MediaObject } from './MediaObject';
interface MediaAPIParams {
  perPage: number;
}

const defaultValues: MediaAPIParams = {
  perPage: 20,
};

export class MediaAPI {
  public reachedFinal: boolean = false;
  private api: wpapi;
  private currentPage: number = 1;
  private perPage: number;

  constructor({ perPage }: MediaAPIParams = defaultValues) {
    this.perPage = perPage;
    this.api = api;
  }

  public async get() {
    if (this.reachedFinal) {
      return [];
    }
    try {
      const media: MediaObject[] = await this.api
        .media()
        .perPage(this.perPage)
        .page(this.currentPage);

      if (media.length === 0 || media.length < this.perPage) {
        this.reachedFinal = true;
      } else {
        this.currentPage += 1;
      }

      return media;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const mediaApi = new MediaAPI();

