import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Container } from './Container';

describe('<Container>', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(
      <Container>
        <div className="mockChildren" />
      </Container>,
    );
  });

  it('should render container className', () => {
    expect(component.find('.container')).toHaveLength(1);
  });

  it('should render children', () => {
    expect(component.find('.mockChildren')).toHaveLength(1);
  });
});
