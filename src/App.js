import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FacilityDashboard from './components/FacilityDashboard';
import FacilityDetail from './components/FacilityDetail';
import SignIn from "./components/SignIn";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<FacilityDashboard />} />
          <Route path="/facility/:id" element={<FacilityDetail />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;