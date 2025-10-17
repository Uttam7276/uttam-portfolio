import React from 'react';

// Import your images
import backgroundImage from '../assets/back_image.jpg';
import profileImage from '../assets/profile.jpg';

export default function Header() {
  const headerStyle = {
    position: 'relative', // Needed for absolute positioning of children
    width: '100%',
    height: '400px', // Adjust height as needed for your banner
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // White text for contrast on the banner
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds readability for text
  };

  const profilePicStyle = {
    width: '150px', // Size of the profile picture
    height: '150px',
    borderRadius: '50%', // Makes it circular
    objectFit: 'cover', // Ensures the image covers the area without distortion
    border: '5px solid #fff', // White border around the profile picture
    marginBottom: '20px', // Space between pic and text
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
  };

  const nameStyle = {
    fontSize: '2.5rem', // Larger font for your name
    margin: '10px 0 5px 0', // Spacing for your name
    fontWeight: 'bold',
  };

  const titleStyle = {
    fontSize: '1.2rem', // Smaller font for the title/tagline
    margin: '0',
  };

  // --- COMPONENT RENDER ---
  return (
    <header style={headerStyle}>
      <img src={profileImage} alt="Profile" style={profilePicStyle} />
      <h1 style={nameStyle}>Welcome to My Portfolio</h1>
      <p style={titleStyle}>Hi, I'm Uttam Chaudhary — an aspiring Web Developer</p>
    </header>
  );
}