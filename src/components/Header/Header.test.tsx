import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Header } from './Header';

describe('<Header/>', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Header title="OwnTitle" />);
  });

  it('should render container className', () => {
    expect(component.find('.container')).toHaveLength(1);
  });

  it('should render title className', () => {
    expect(component.find('.header')).toHaveLength(1);
  });

  it('should have correct title', () => {
    expect(component.find('.header').text()).toBe('OwnTitle');
  });
});
