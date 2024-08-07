import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Products() {
  const linkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
    color: isActive ? '#ffcc00' : '#000',
    marginRight: '20px',
  });

  return (
    <>
      <div>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
        <NavLink  to="featured" style={linkStyles}>Featured products</NavLink>
        <NavLink to="new" style={linkStyles}>New products</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
