import React, { useEffect } from 'react';
const SplineViewer = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.30/build/spline-viewer.js';

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <spline-viewer url="https://prod.spline.design/5iROfOOblFMTzKZs/scene.splinecode" style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default SplineViewer;
