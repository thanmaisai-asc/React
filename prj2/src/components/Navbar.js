import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  
  const NavStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? '#ffcc00' : '#f0f0f0'
    };
  }

  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
    </nav>
  )
}
