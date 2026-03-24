import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar visible navbar-minimal">
      <div className="navbar-header">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo_white.svg`} alt="Logo" className="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
