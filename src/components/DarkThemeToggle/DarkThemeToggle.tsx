import * as React from 'react';
import { toggleDarkMode } from 'utils/toggleDarkMode';

import styles from './DarkThemeToggle.styles.scss';

export const DarkThemeToggle = () => {
  return (
    <div className={styles.wrapper}>
      <input
        onChange={toggleDarkMode}
        id="darkThemeToggle"
        type="checkbox"
        name="darkThemeToggle"
        className={styles.input}
      />
      <label htmlFor="darkThemeToggle" className={styles.label} />
    </div>
  );
};

DarkThemeToggle.displayName = 'DarkThemeToggle';
