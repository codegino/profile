'use client';
import React, {createContext, useContext, useEffect, useState} from 'react';

const BlinkContext = createContext(false);

export const BlinkProvider = ({children}: {children: React.ReactNode}) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    };

    const blinkInterval = setInterval(blink, 5000); // Blink every 5 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <BlinkContext.Provider value={isBlinking}>{children}</BlinkContext.Provider>
  );
};

export const useBlink = () => useContext(BlinkContext);
