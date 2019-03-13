import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { StateContext } from 'state/state';

import { Picture, PictureWithContext } from './Picture';

describe('<Picture>', () => {
  let component: ShallowWrapper;
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
    component = shallow(
      <Picture
        alt="test"
        src="test"
        onClick={onClickMock}
        id="test"
        currentIndex={0}
      />,
    );
  });

  it('should render alt tag', () => {
    expect(component.find('img').props().alt).toBe('test');
  });
  it('should render src props', () => {
    expect(component.find('img').props().src).toBe('test');
  });
  it('should render img', () => {
    expect(component.find('img').props().className).toBe('picture');
  });
  it('should render button', () => {
    expect(component.find('input')).toHaveLength(1);
  });
  it('should call trigger with params', () => {
    // tslint:disable-next-line:no-any
    (component.find('input').props() as any).onClick();
    expect(onClickMock).toHaveBeenCalledWith('test');
  });
});

describe('<Picture With Context>', () => {
  let component: ReactWrapper;
  let setFullscreenDataMock: jest.Mock;
  let toggleFullscreenData: jest.Mock;
  beforeEach(() => {
    setFullscreenDataMock = jest.fn();
    toggleFullscreenData = jest.fn();

    component = mount(
      <StateContext.Provider
        value={{
          // tslint:disable-next-line:no-any
          fullScreenData: { data: 'coolData' } as any,
          fullScreenOpened: false,
          setFullScreenData: setFullscreenDataMock,
          toggleFullscreen: toggleFullscreenData,
        }}
      >
        <PictureWithContext
          date={new Date()}
          alt="test"
          src="test"
          // tslint:disable-next-line:no-any
          rawData={{ data: 'coolData' } as any}
          id="test"
          currentIndex={0}
        />
      </StateContext.Provider>,
    );
  });

  it('should call setFullscreen and toggleFullscreen on click', () => {
    component
      .find(Picture)
      .props()
      .onClick('1');

    expect(setFullscreenDataMock).toHaveBeenCalledWith({
      rawData: { data: 'coolData' },
      index: 0,
    });
    expect(toggleFullscreenData).toHaveBeenCalledWith(true);
  });
});
