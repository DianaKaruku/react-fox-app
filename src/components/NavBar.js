import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/comments" activeClassName="active">
        Comments
      </NavLink>
      <NavLink to="/addimage" activeClassName="active">
        Add Image
      </NavLink>
      <NavLink to="/foxfacts" activeClassName="active">
        Fox Facts
      </NavLink>
    </nav>
  );
};

export default NavBar;
