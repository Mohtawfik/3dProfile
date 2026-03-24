import React from 'react';
import { homeWordmark } from '../constants';
import './HomeWordmark.css';

const HomeWordmark = () => {
  const { line1, line2 } = homeWordmark;

  return (
    <header className="home-wordmark" aria-label="Site title">
      <div className="home-wordmark-stack">
        <span className="home-wordmark-line home-wordmark-line--secondary">{line1}</span>
        <span className="home-wordmark-line home-wordmark-line--primary">{line2}</span>
      </div>
    </header>
  );
};

export default HomeWordmark;
