import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Gallery } from './Gallery';

describe('<Gallery>', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(
      <Gallery className="testClassName">
        <div className="mockChildren" />
      </Gallery>,
    );
  });
  it('should render children', () => {
    expect(component.find('.mockChildren')).toHaveLength(1);
  });
  it('should render className', () => {
    expect(component.find('.gallery').props().className).toContain(
      'testClassName',
    );
  });
});
