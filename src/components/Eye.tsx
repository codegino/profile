'use client';
import React, {useState, useEffect, useRef} from 'react';
import {useBlink} from '../contexts/BlinkContext';

export default function Eye() {
  const isBlinking = useBlink();
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isMouseOver, setIsMouseOver] = useState(false);
  const eyeRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (eyeRef.current && !isBlinking) {
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const deltaX = event.clientX - eyeX;
        const deltaY = event.clientY - eyeY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(10, Math.hypot(deltaX, deltaY));
        setPosition({
          x: distance * Math.cos(angle),
          y: distance * Math.sin(angle),
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isBlinking]);

  return (
    <div
      ref={eyeRef}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      style={{
        width: 120,
        height: 60,
        backgroundColor: '#fff',
        border: '5px solid #000',
        borderRadius: '60px / 30px', // Oval shape for human eye
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          backgroundColor: '#000',
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          transition: 'transform 0.1s',
        }}
      />
      {/* Eyelid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ccc', // Set eyelid color to light gray
          transform:
            isBlinking || isMouseOver ? 'translateY(0%)' : 'translateY(-100%)',
          transition: 'transform 0.15s',
        }}
      />
    </div>
  );
}
