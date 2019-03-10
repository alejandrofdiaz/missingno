import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { monthSortCallback } from 'utils/gallerySortCallback';

import { Gallery, GalleryRow } from './Gallery';

let count = 0;
const getDate = () => {
  return new Date(1, count++, 2);
};

// tslint:disable-next-line: no-any
const PictureMock = ({ date }: any = { date: new Date(1, count, 2) }) => {
  // tslint:disable-next-line: no-increment-decrement
  count++;
  return <div className="mockChildren" />;
};

describe('<Gallery/>', () => {
  let component: ReactWrapper;
  let gallerySortCallback: jest.Mock;
  beforeEach(() => {
    gallerySortCallback = jest.fn((...args) => {
      return monthSortCallback.apply(undefined, args);
    });
    component = mount(
      <Gallery className="testClassName" sortCallback={gallerySortCallback}>
        <PictureMock date={getDate()} />
        <PictureMock date={getDate()} />
      </Gallery>,
    );
  });
  it('should render children', () => {
    expect(component.find('.mockChildren')).toHaveLength(2);
  });
  it('should call sortCallback twice', () => {
    expect(gallerySortCallback).toHaveBeenCalledTimes(2);
  });
  it('should render gallery row twice', () => {
    expect(component.find(GalleryRow)).toHaveLength(2);
  });
  it('should render className', () => {
    expect(component.find('.gallery').props().className).toContain(
      'testClassName',
    );
  });
});

describe('<GalleryRow/>', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(
      <GalleryRow displayName="testName">
        <div className="mockChildren" />
      </GalleryRow>,
    );
  });

  it('should render displayName', () => {
    expect(component.find('.galleryRowTitle').text()).toBe('testName');
  });

  it('should render children', () => {
    expect(component.find('.mockChildren')).toHaveLength(1);
  });
});
