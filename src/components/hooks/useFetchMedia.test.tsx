import { mount, ReactWrapper } from 'enzyme';
import React, { useContext } from 'react';
import { StateContext } from 'state/state';
import { StateProvider } from 'state/StateProvider';

import { useFetchMedia } from './useFetchMedia';
// tslint:disable: no-any

jest.mock('api/media');
jest.useFakeTimers();

let loadedOpenedMock: jest.Mock;

describe('useFetchMedia', () => {
  const ComponentUseFetchMedia = () => {
    loadedOpenedMock = jest.fn();
    const Context = useContext(StateContext);
    const { fetchValues, hasMore } = useFetchMedia();
    loadedOpenedMock(Context.loaderOpened);
    return (
      <div
        id="test"
        onClick={fetchValues}
        className={[hasMore ? 'hasMore' : 'reachedFinal'].join(' ')}
      >
        {Context.pictureData.map((value: any, index) => (
          <span key={value + index} id={value + index}>
            {value}
          </span>
        ))}
      </div>
    );
  };
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <StateProvider>
        <ComponentUseFetchMedia />
      </StateProvider>,
    );
  });

  describe('on render', () => {
    it('should fetch values on initial render', () => {
      expect(component.find('span')).toHaveLength(2);
    });

    it('should return hasMore', () => {
      expect(component.find('.hasMore')).toHaveLength(1);
    });

    it('should have loader closed', () => {
      expect(loadedOpenedMock).toHaveBeenCalledWith(false);
    });
  });

  it('should render more values on fetchValues trigger', () => {
    (component.find('#test') as any).simulate('click');
    expect(component.find('span')).toHaveLength(4);
  });

  describe('on reached final', () => {
    it('should return hasMore true', () => {
      (component.find('#test') as any).simulate('click');
      expect(component.find('.reachedFinal')).toHaveLength(1);
    });
  });
});
