import { toggleDarkMode } from './toggleDarkMode';

describe('toggleDarkMode', () => {
  beforeEach(() => {
    document.body = document.createElement('body');
    toggleDarkMode();
  });

  it('should set className on body', () => {
    expect(document.body.classList.contains('🌚')).toBeTruthy();
  });

  describe('on toggle down', () => {
    beforeEach(() => {
      toggleDarkMode();
    });
    it('should not have dark mode class on body', () => {
      expect(document.body.classList.contains('🌚')).toBeFalsy();
    });
  });
});
