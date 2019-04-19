import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';

import { Loader } from './Loader';

describe('<Loader/>', () => {
  let component: ReactWrapper;
  const createComponent = (open: boolean = false) => {
    component = mount(<Loader isOpen={open} />);
  };

  beforeEach(() => {
    const rootEl = document.createElement('div');
    rootEl.setAttribute('id', 'loader');
    document.body.appendChild(rootEl);
  });

  describe('on render', () => {
    beforeEach(() => {
      createComponent();
    });

    it('should create container component', () => {
      expect(document.body.getElementsByClassName('container')).toHaveLength(1);
    });

    it('should render markup', () => {
      expect(component.find('.wrapper')).toHaveLength(1);
      expect(component.find('.title')).toHaveLength(1);
      expect(component.find('.box')).toHaveLength(1);
    });
  });

  describe('on loader opened', () => {
    beforeEach(() => {
      createComponent(true);
    });

    it('should have container active className', () => {
      expect(document.body.getElementsByClassName('active')).toHaveLength(1);
    });
  });
});
