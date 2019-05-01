const DARK_MODE_TRIGGER = '🌚';

export const toggleDarkMode = () =>
  document.body.classList.toggle(DARK_MODE_TRIGGER);
