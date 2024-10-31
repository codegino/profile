'use client';
import React, {useEffect, useState} from 'react';
import Eye from './Eye';
import {BlinkProvider} from '../contexts/BlinkContext';

const ParallaxEyes: React.FC = () => {
  const [gap, setGap] = useState(16); // Initial gap is 8px
  const [offsetY, setOffsetY] = useState(0); // Initial vertical offset

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the gap based on scroll position
      const newGap = 16 + scrollY * 0.1;
      // Adjust the vertical position based on scroll position
      const newOffsetY = scrollY * 0.1; // Adjust the multiplier as needed

      setGap(newGap);
      setOffsetY(newOffsetY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BlinkProvider>
      <div
        className="pt-[15vh] -pb-[15vh] flex sticky top-0"
        style={{
          gap: `${gap}px`,
          transform: `translateY(${offsetY}px)`,
        }}
      >
        <Eye />
        <Eye />
      </div>
    </BlinkProvider>
  );
};

export default ParallaxEyes;
