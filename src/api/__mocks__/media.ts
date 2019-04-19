class MediaMock {
  public reachedFinal: boolean = false;
  private count = 0;
  public get() {
    return {
      // tslint:disable-next-line: no-any
      then: (cb: any) => {
        this.count += 1;
        if (this.count > 2) {
          this.reachedFinal = true;
        }
        cb(['1', '2']);
      },
    };
  }
}

export const mediaApi = new MediaMock();
