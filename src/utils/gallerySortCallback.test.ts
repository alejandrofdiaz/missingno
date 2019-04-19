import { defaultSortCallback, monthSortCallback } from './gallerySortCallback';

describe('utils/defaultSortCallback', () => {
  it('should return object with unknown', () => {
    expect(defaultSortCallback({}, { test: 'node' })).toEqual({
      unknown: { displayName: 'unknown', nodes: [{ test: 'node' }] },
    });
  });

  it('should add node to current object', () => {
    expect(
      defaultSortCallback(
        {
          unknown: {
            displayName: 'unknown',
            nodes: [{ test: 'previousNode' }],
          },
        },
        { test: 'node' },
      ),
    ).toEqual({
      unknown: {
        displayName: 'unknown',
        nodes: [{ test: 'previousNode' }, { test: 'node' }],
      },
    });
  });
});

describe('utils/monthSortCallback', () => {
  it('should arrange nodes', () => {
    expect(
      monthSortCallback({}, { props: { date: new Date(1, 2, 3) } }),
    ).toEqual({
      '19010203': {
        displayName: '19010203',
        nodes: [{ props: { date: new Date(1, 2, 3) } }],
      },
    });
  });
});
