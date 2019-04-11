import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Fullscreen } from './Fullscreen';

describe('<Fullscreen />', () => {
  let component: ShallowWrapper;
  let onClickMock: jest.Mock;
  let onNextMock: jest.Mock;
  let onPreviousMock: jest.Mock;
  describe('on opened', () => {
    beforeEach(() => {
      onClickMock = jest.fn();
      onNextMock = jest.fn();
      onPreviousMock = jest.fn();
      component = shallow(
        // tslint:disable-next-line:no-any
        <Fullscreen
          toggleFullscreen={onClickMock}
          opened
          currentIndex={6}
          data={{ date: new Date() } as any} // tslint:disable-line no-any
          onNext={onNextMock}
          onPrevious={onPreviousMock}
        />,
      );
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
      // tslint:disable-next-line:no-any
      (component.find('input.fullscreenClose') as any).props().onClick();
      expect(onClickMock).toHaveBeenCalledWith(false);
    });

    it('should call on next callback', () => {
      // tslint:disable-next-line:no-any
      (component.find('.fullscreenDirectionNext').props().onClick as any)();
      expect(onNextMock).toHaveBeenCalledWith(6);
    });
    it('should call on previous callback', () => {
      // tslint:disable-next-line:no-any
      (component.find('.fullscreenDirectionPrevious').props().onClick as any)();
      expect(onPreviousMock).toHaveBeenCalledWith(6);
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
      // tslint:disable-next-line:no-any
      (component.find('input.fullscreenClose') as any).props().onClick();
      expect(onClickMock).toHaveBeenCalledWith(true);
    });
  });
});
