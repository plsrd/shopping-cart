import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Clack Council</Link>
      <div className='navbar-links'>
        <Link to='/keycaps'>Keycaps</Link>
      </div>
    </nav>
  )
}

export default Navbar
