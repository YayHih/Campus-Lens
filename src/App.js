import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import logo from './blackhole.svg';

import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import ClubSpot from './ClubSpot';
import CubeSat from './CubeSat';
import Tetris from './Tetris';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Helper function to determine if the button is for the current route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-left">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="navbar-right">
            <button
              className={`nav-button ${isActive('/') ? 'active' : ''}`}
              onClick={() => handleNavigate('/')}
            >
              Home
            </button>
            <button
              className={`nav-button ${isActive('/about') ? 'active' : ''}`}
              onClick={() => handleNavigate('/about')}
            >
              About Me
            </button>
            <button
              className={`nav-button ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => handleNavigate('/contact')}
            >
              Contact
            </button>
           
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clubspot" element={<ClubSpot />} />
        <Route path="/cubesat" element={<CubeSat />} />
        <Route path="/tetris" element={<Tetris />} />
      </Routes>
      <div className="extraSpace"></div>
    </div>
  );
}

export default App;
