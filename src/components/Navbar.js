import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>CampusLens</h1>
      </div>
      <div className="navbar-menu">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;