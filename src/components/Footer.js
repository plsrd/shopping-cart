import React from 'react' 
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {

  return (
    <div className='footer'>
      <Link to={'/shopping-cart'}>Home</Link>
      <Link to={'/shopping-cart/shop'}>Shop</Link>
      <Link to={'/shopping-cart/cart'}>Cart</Link>
    </div>
  )
}

export default Footer