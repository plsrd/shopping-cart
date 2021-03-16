import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='main-link'>Clack Council</Link>
      <Link to='/shop' className='shop-link'>Shop</Link>
      <Link to='/cart' className='shop-link'>Cart</Link>
    </nav>
  )
}

export default Navbar
