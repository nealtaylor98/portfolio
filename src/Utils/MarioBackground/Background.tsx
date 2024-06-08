import React from 'react';
import './MarioBackground.css';

export const CustomBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div id="app">
      <div id="star-container">
        <div id="star-pattern"></div>
        <div id="star-gradient-overlay"></div>
      </div>
      <div id="stripe-container">
        <div id="stripe-pattern"></div>
      </div>
      <div id="content-wrapper">{children}</div>
    </div>
  );
};
