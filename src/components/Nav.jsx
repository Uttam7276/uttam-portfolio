import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Summary', isEnd: true },
  { path: '/education', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/hobbies', label: 'Hobbies' },
  { path: '/resume', label: 'Projects' },
];

// Reusable component for each navigation link to handle hover state
const NavItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Style for the link when it's active
  const activeLinkStyle = {
    color: '#0D1B2A', // Dark text for contrast
    backgroundColor: '#FFC300', // A vibrant gold/amber for the active link
    padding: '8px 15px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    transform: 'scale(1.05)',
  };

  // Default style for an inactive link
  const defaultLinkStyle = {
    color: '#E0E1DD', // An off-white, soft text color
    textDecoration: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  };

  // Combine default style with hover style if the link is being hovered over
  const combinedStyle = isHovered ? { ...defaultLinkStyle, ...activeLinkStyle } : defaultLinkStyle;

  return (
    <NavLink
      to={item.path}
      end={item.isEnd}
      style={({ isActive }) => (isActive ? activeLinkStyle : combinedStyle)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.label}
    </NavLink>
  );
};


export default function Nav() {
  // New style for the main navigation container
  const navContainerStyle = {
    backgroundColor: '#0D1B2A', // A very dark, deep blue from your banner
    padding: '15px 30px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  };

  return (
    <nav style={navContainerStyle}>
      {navItems.map((item) => (
        <NavItem key={item.path} item={item} />
      ))}
    </nav>
  );
}
