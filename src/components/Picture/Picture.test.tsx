import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Picture } from './Picture';

describe('<Picture>', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Picture alt="test" src="test" />);
  });

  it('should render alt tag', () => {
    expect(component.find('img').props().alt).toBe('test');
  });
  it('should render src props', () => {
    expect(component.find('img').props().src).toBe('test');
  });
  it('should render className', () => {
    expect(component.find('img').props().className).toBe('picture');
  });
});
