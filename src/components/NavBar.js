// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/comments">Comments</Link>
      <Link to="/addimage">Add Image</Link>
      <Link to="/foxfacts">Fox Facts</Link>
    </nav>
  );
};

export default NavBar;
