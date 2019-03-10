import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Picture } from './Picture';

describe('<Picture>', () => {
  let component: ShallowWrapper;
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
    component = shallow(
      <Picture alt="test" src="test" onClick={onClickMock} id="test" />,
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
