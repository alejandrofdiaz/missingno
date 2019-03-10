import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Fullscreen } from './Fullscreen';

describe('<Fullscreen />', () => {
  let component: ShallowWrapper;
  let onClickMock: jest.Mock;

  describe('on opened', () => {
    beforeEach(() => {
      onClickMock = jest.fn();
      component = shallow(<Fullscreen toggleFullscreen={onClickMock} opened />);
    });

    it('should have correct classes', () => {
      expect(component.find('.fullscreenWrapper')).toHaveLength(1);
      expect(component.find('.fullscreen')).toHaveLength(1);
      expect(component.find('.fullscreenBody')).toHaveLength(1);
      expect(component.find('.fullscreenData')).toHaveLength(1);
      expect(component.find('.fullscreenLightbox')).toHaveLength(1);
      expect(component.find('.fullscreenClose')).toHaveLength(1);
    });

    it('should render opened class when opened', () => {
      expect(component.find('.fullscreenOpened')).toHaveLength(1);
    });

    it('should trigger toggleFullscreen on click with false', () => {
      (component.find('input') as any).props().onClick();
      expect(onClickMock).toHaveBeenCalledWith(false);
    });
  });

  describe('on closed', () => {
    beforeEach(() => {
      onClickMock = jest.fn();
      component = shallow(
        <Fullscreen toggleFullscreen={onClickMock} opened={false} />,
      );
    });

    it('should not render opened class when opened', () => {
      expect(component.find('.fullscreenOpened')).toHaveLength(0);
    });

    it('should trigger toggleFullscreen on click with true', () => {
      (component.find('input') as any).props().onClick();
      expect(onClickMock).toHaveBeenCalledWith(true);
    });
  });
});
