import React from 'react';
import Footers from '../components/Footers';

const InnerLayout = ({ children }) => {
  return (
    <div className="inner-page app">
      <main className="inner-page-main">{children}</main>
      <Footers />
    </div>
  );
};

export default InnerLayout;
