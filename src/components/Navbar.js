import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/search" className="nav-link">Search</Link>
      <Link to="/favorites" className="nav-link">Favorites</Link>
    </nav>
  );
};

export default Navbar;
