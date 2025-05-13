'use client'
import React, { useEffect, useRef } from 'react';
import './RotatingGlowButton.css'; // for the custom CSS

const RotatingGlowButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let angle = 0;
    const rotate = () => {
      angle = (angle + 1) % 360;
      if (buttonRef.current) {
        buttonRef.current.style.setProperty('--angle', `${angle}deg`);
      }
      requestAnimationFrame(rotate);
    };
    rotate();
  }, []);

  return (
    <button
      ref={buttonRef}
      className="rotating-glow-button text-white text-lg font-semibold px-10 py-4"
    >
      
    </button>
  );
};

export default RotatingGlowButton;
