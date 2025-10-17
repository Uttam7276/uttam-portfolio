import React from 'react';

// Import your images from the assets folder
import backgroundImage from '../assets/back_image.jpg';
import profileImage from '../assets/profile.jpg';

export default function Header() {
  const headerStyle = {
    position: 'relative',
    width: '100%',
    height: '300px', // <-- Reduced height from 400px to 300px
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const profilePicStyle = {
    width: '120px', // <-- Reduced size from 150px
    height: '120px', // <-- Reduced size from 150px
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #fff', // <-- Slightly smaller border
    marginBottom: '15px', // <-- Reduced margin
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const nameStyle = {
    fontSize: '2.2rem', // <-- Reduced font size
    margin: '10px 0 5px 0',
    fontWeight: 'bold',
  };

  const titleStyle = {
    fontSize: '1.1rem', // <-- Reduced font size
    margin: '0',
  };

  return (
    <header style={headerStyle}>
      <img src={profileImage} alt="Profile" style={profilePicStyle} />
      <h1 style={nameStyle}>Welcome to My Portfolio</h1>
      <p style={titleStyle}>Hi, I'm Uttam Chaudhary — an aspiring Web Developer</p>
    </header>
  );
}

