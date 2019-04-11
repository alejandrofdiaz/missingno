import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';

import { Footer, FooterElement } from './Footer';

describe('<Footer/>', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <Footer>
        <FooterElement href="https://twitter.com" title="twitter" />
        <FooterElement href="https://twitter.com" title="twitter" />
      </Footer>,
    );
  });

  it('should render correct classes', () => {
    expect(component.find('.container')).toHaveLength(1);
    expect(component.find('.list')).toHaveLength(1);
  });

  describe('children', () => {
    it('should render', () => {
      expect(component.find('.element')).toHaveLength(2);
    });

    it('should render link classes', () => {
      expect(component.find('.link')).toHaveLength(2);
    });

    it('should have href', () => {
      expect(
        component
          .find('.link')
          .at(0)
          .props().href,
      ).toBe('https://twitter.com');
    });
    it('should have title', () => {
      expect(
        component
          .find('.link')
          .at(0)
          .props().title,
      ).toBe('twitter');
    });
  });
});
