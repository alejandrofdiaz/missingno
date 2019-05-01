import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import { DarkThemeToggle } from './DarkThemeToggle';

jest.mock('utils/toggleDarkMode');

describe('<DarkThemeToggle/>', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(<DarkThemeToggle />);
    // tslint:disable-next-line: no-any
    (component.find('.input') as any).props().onChange();
  });

  it('should render markup', () => {
    expect(component.find('.wrapper')).toHaveLength(1);
    expect(component.find('.label')).toHaveLength(1);
    expect(component.find('.input')).toHaveLength(1);
  });
});
