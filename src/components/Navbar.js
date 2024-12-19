import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
        <h1>CampusLens</h1>
      </div>
      <div className="navbar-menu">
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button className="signin-button" onClick={() => navigate('/signin')}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;