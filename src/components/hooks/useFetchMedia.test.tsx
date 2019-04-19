import { mount, ReactWrapper } from 'enzyme';
import React, { useContext } from 'react';
import { StateContext } from 'state/state';
import { StateProvider } from 'state/StateProvider';

import { useFetchMedia } from './useFetchMedia';
// tslint:disable: no-any

jest.mock('api/media');
jest.useFakeTimers();

describe('useFetchMedia', () => {
  const ComponentUseFetchMedia = () => {
    const Context = useContext(StateContext);
    const loadMore = useFetchMedia();
    return (
      <div id="test" onClick={loadMore}>
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

  it('should fetch values on initial render', () => {
    expect(component.find('span')).toHaveLength(2);
  });

  it('should render more values on fetchValues trigger', () => {
    (component.find('#test') as any).simulate('click');
    expect(component.find('span')).toHaveLength(4);
  });
});
