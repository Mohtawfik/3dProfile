// src/components/SplineGlobe.js

import React from 'react';
import Spline from '@splinetool/react-spline';
import './SplineGlobe.css'; // Optional for further styling



const SplineGlobe = () => {
  return (
    <div className="spline-container">
      <Spline scene="https://prod.spline.design/awLNENEwU5JPjS-1/scene.splinecode" />
    </div>
  );
};

export default SplineGlobe;

