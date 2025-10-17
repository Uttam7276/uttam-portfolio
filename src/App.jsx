import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all your components
// Try adding the .jsx extension
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

// Import all your page components
import Summary from './pages/Summary';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Resume from './pages/Resume.jsx';

import './index.css';

export default function App() {
  // Style for the main container to ensure footer sticks to the bottom
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the container takes at least the full height of the viewport
  };

  // Style for the main content area to make it grow and push the footer down
  const mainContentStyle = {
    flex: '1', // This makes this element grow to fill available space
    padding: '20px',
  };

  return (
    <BrowserRouter>
      {/* This div is our main flex container */}
      <div style={appContainerStyle}>
        
        {/* Header will appear at the top of every page */}
        <Header />

        {/* Navigation will be below the header */}
        <Nav />

        {/* This main element will hold your page content and grow to fill space */}
        <main style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* Footer will stick to the bottom of the page */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
