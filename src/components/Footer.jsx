import React from 'react';

export default function Footer() {
  // --- STYLES ---

  // Main footer style to match the green navbar theme
  const footerStyle = {
    backgroundColor: '#27ae60', // Same green as the navbar
    color: '#000000',          // Black text
    padding: '25px',
    textAlign: 'center',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.15)', // Shadow on top for separation
    marginTop: 'auto', // Pushes footer to the bottom in your App.jsx flex layout
  };

  // Style for the links to make them look clean
  const linkStyle = {
    color: '#000000',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '1rem',
    transition: 'opacity 0.3s ease', // Smooth hover effect
  };

  // --- COMPONENT RENDER ---

  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: '10px' }}>
        {/* Email */}
        <a 
          href="mailto:uttamsw183221@gmail.com" 
          style={linkStyle}
          onMouseEnter={e => e.target.style.opacity = 0.7}
          onMouseLeave={e => e.target.style.opacity = 1}
        >
          📧 Email Me
        </a>
        <span style={{ margin: '0 10px' }}>|</span>
        {/* GitHub */}
        <a 
          href="https://github.com/uttam7276" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={linkStyle}
          onMouseEnter={e => e.target.style.opacity = 0.7}
          onMouseLeave={e => e.target.style.opacity = 1}
        >
          🌐 GitHub
        </a>
        <span style={{ margin: '0 10px' }}>|</span>
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/uttam-chaudhary-606492292" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={linkStyle}
          onMouseEnter={e => e.target.style.opacity = 0.7}
          onMouseLeave={e => e.target.style.opacity = 1}
        >
          💼 LinkedIn
        </a>
      </div>
      
      {/* Copyright Notice */}
      <div>
        &copy; {new Date().getFullYear()} Uttam Chaudhary. All rights reserved.
      </div>
    </footer>
  );
}
