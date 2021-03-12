import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Clack Council</Link>
      <div className='navbar-links'>
        <Link to='/shop'>Shop</Link>
        <Link to='/keycaps'>Keycaps</Link>
        <Link to='/switches'>Switches</Link>
      </div>
    </nav>
  )
}

export default Navbar
