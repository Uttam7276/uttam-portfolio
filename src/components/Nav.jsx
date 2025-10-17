import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Summary' },
  { path: '/education', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/hobbies', label: 'Hobbies' },
  { path: '/resume', label: 'Resume' },
];

export default function Nav() {
  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            marginRight: 12,
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
