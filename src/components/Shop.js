import React from 'react'
import { Link } from 'react-router-dom'
import keycapData from '../data/keycapData'
import '../styles/keycaps.css'

const Shop = () => {

  return (
    <div className='all-products-container'>
      {keycapData.map(item =>
        <Link
          key={item.id}
          className='keycap'
          to={`/shop/${item.id}`}
        >
          <p>{item.name}</p>
          <img 
            src={item.images.hero1} 
            alt={item.name}
            className='product-image'
          />
        </Link>
      )}
    </div>
  )
}

export default Shop