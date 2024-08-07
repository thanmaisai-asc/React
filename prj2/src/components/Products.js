import React from 'react';
import { NavLink, Outlet,Link } from 'react-router-dom';

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
        <Link to="/products/featured"> Featured products</Link>
        <Link to="/products/new"> New products</Link>
      </nav>
      <Outlet />
    </>
  );
}
