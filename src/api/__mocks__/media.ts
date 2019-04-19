class MediaMock {
  public get() {
    // tslint:disable-next-line: no-any
    return { then: (cb: any) => cb(['1', '2']) };
  }
}

export const mediaApi = new MediaMock();
