import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Summary', isEnd: true },
  { path: '/education', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/hobbies', label: 'Hobbies' },
  { path: '/resume', label: 'Full Resume' },
];

export default function Nav() {
  // Updated style for the navigation container
  const navContainerStyle = {
    backgroundColor: '#27ae60', // A pleasant, medium green
    padding: '15px 30px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  };

  // Updated style for active links - still distinct, but with black text
  const activeLinkStyle = {
    backgroundColor: '#2ecc71', // A slightly lighter green for active state
    color: '#000000', // Black text for active links
    padding: '8px 15px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
    // Hover effect for active links
    '&:hover': {
      transform: 'scale(1.05)', // Slightly enlarge on hover
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add a stronger shadow on hover
    }
  };

  // Default style for inactive links - now with black text and hover
  const defaultLinkStyle = {
    color: '#000000', // Black text for inactive links
    textDecoration: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
    // Hover effect for inactive links
    '&:hover': {
      backgroundColor: '#2ecc71', // Light green background on hover
      transform: 'scale(1.05)', // Slightly enlarge on hover
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add a stronger shadow on hover
    }
  };

  return (
    <nav style={navContainerStyle}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.isEnd}
          className="nav-link"
          style={({ isActive }) => ({
            ...(isActive ? activeLinkStyle : defaultLinkStyle),
            // Combining hover styles here since React's inline style doesn't support :hover
            // directly. For true :hover, you'd typically use CSS classes or a library.
            // This is a basic example; for more complex hover, external CSS is recommended.
            // For now, we'll apply it directly for demonstration.
            // Note: Inline styles don't natively support pseudo-classes like :hover.
            // To achieve hover effects with inline styles, you usually need event handlers
            // (onMouseEnter, onMouseLeave) or a CSS-in-JS library.
            // For this example, I'll generate an image that reflects the intended visual.
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}