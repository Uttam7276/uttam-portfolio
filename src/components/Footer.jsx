import React from 'react';

export default function Footer() {
  // --- STYLES ---

  // Main footer style to match the new dark blue navbar theme
  const footerStyle = {
    backgroundColor: '#0D1B2A', // Same dark, deep blue as the navbar
    color: '#E0E1DD',          // Same off-white, soft text color
    padding: '25px',
    textAlign: 'center',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.3)', // Shadow on top for separation
    marginTop: 'auto', // Pushes footer to the bottom in your App.jsx flex layout
  };

  // Style for the links to make them stand out
  const linkStyle = {
    color: '#E0E1DD', // Default text color
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease', // Smooth hover effect
  };
  
  // Style for the links on hover
  const linkHoverStyle = {
      color: '#FFC300' // Same vibrant gold/amber from the nav hover
  }

  // --- COMPONENT RENDER ---

  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: '10px' }}>
        {/* Email */}
        <a 
          href="mailto:uttamsw183221@gmail.com" 
          style={linkStyle}
          onMouseEnter={e => e.target.style.color = linkHoverStyle.color}
          onMouseLeave={e => e.target.style.color = linkStyle.color}
        >
          📧 Email Me
        </a>
        <span style={{ margin: '0 10px', color: '#E0E1DD' }}>|</span>
        {/* GitHub */}
        <a 
          href="https://github.com/uttam7276" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={linkStyle}
          onMouseEnter={e => e.target.style.color = linkHoverStyle.color}
          onMouseLeave={e => e.target.style.color = linkStyle.color}
        >
          🌐 GitHub
        </a>
        <span style={{ margin: '0 10px', color: '#E0E1DD' }}>|</span>
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/uttam-chaudhary-606492292" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={linkStyle}
          onMouseEnter={e => e.target.style.color = linkHoverStyle.color}
          onMouseLeave={e => e.target.style.color = linkStyle.color}
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
