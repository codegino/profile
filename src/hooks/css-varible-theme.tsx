import React from 'react';
import useDarkMode from 'use-dark-mode';

const COLOR_PRIMARY = '#55c57a';
const COLOR_PRIMARY_CONTRAST = '#55c57a';
const COLOR_PRIMARY_LIGHT = '#aaff00';
const COLOR_PRIMARY_DARK = 'green';
const COLOR_PRIMARY_ACCENT = '#3ff000';

const COLOR_DARK = '#222222';
const COLOR_DARK_CONTRAST = '#FFFFFF';
const COLOR_DARK_LIGHT = '#555555';
const COLOR_DARK_DARK = '#000000';
const COLOR_DARK_ACCENT = 'green';

const COLOR_LIGHT = '#F3F3F3';
const COLOR_LIGHT_CONTRAST = 'rgb(39, 38,38)';
const COLOR_LIGHT_LIGHT = '#FFFFFF';
const COLOR_LIGHT_DARK = '#CFCFCF';
const COLOR_LIGHT_ACCENT = '#EEEEEE';

const COLOR_LIGHT_GRAY_1 = '#EEEEEE';
const COLOR_LIGHT_GRAY_2 = '#BBBBBB';
const COLOR_DARK_GRAY_1 = '#222222';
const COLOR_DARK_GRAY_2 = '#777777';

export default function useCssVariableTheme() {
  const {value: isDarkMode, toggle, disable, enable} = useDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty(
        '--color-primary',
        COLOR_PRIMARY,
      );
      document.documentElement.style.setProperty(
        '--color-light-light',
        COLOR_DARK_DARK,
      );
      document.documentElement.style.setProperty(
        '--color-light-dark',
        COLOR_DARK_LIGHT,
      );
      document.documentElement.style.setProperty('--color-light', COLOR_DARK);
      document.documentElement.style.setProperty(
        '--color-dark-dark',
        COLOR_LIGHT_LIGHT,
      );
      document.documentElement.style.setProperty('--color-dark', COLOR_LIGHT);
      document.documentElement.style.setProperty(
        '--color-primary-light',
        COLOR_PRIMARY_DARK,
      );
      document.documentElement.style.setProperty(
        '--color-primary-dark',
        COLOR_PRIMARY_LIGHT,
      );
    } else {
      document.documentElement.style.setProperty(
        '--color-primary',
        COLOR_PRIMARY,
      );
      document.documentElement.style.setProperty(
        '--color-light-light',
        COLOR_LIGHT_LIGHT,
      );
      document.documentElement.style.setProperty(
        '--color-light-dark',
        COLOR_LIGHT_DARK,
      );
      document.documentElement.style.setProperty('--color-light', COLOR_LIGHT);
      document.documentElement.style.setProperty(
        '--color-dark-dark',
        COLOR_DARK_DARK,
      );
      document.documentElement.style.setProperty('--color-dark', COLOR_DARK);
      document.documentElement.style.setProperty(
        '--color-primary-light',
        COLOR_PRIMARY_LIGHT,
      );
      document.documentElement.style.setProperty(
        '--color-primary-dark',
        COLOR_PRIMARY_DARK,
      );
    }
  }, [isDarkMode]);

  return {
    toggle,
    disable,
    enable,
    isDarkMode,
  };
}
