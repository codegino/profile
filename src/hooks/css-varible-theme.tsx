import React from 'react';
import useDarkMode from 'use-dark-mode';

export default function useCssVariableTheme() {
  const {value: isDarkMode, toggle, disable, enable} = useDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return {
    toggle,
    disable,
    enable,
    isDarkMode,
  };
}
