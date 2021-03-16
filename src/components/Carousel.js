import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import keycapData from '../data/keycapData'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [items] = useState(keycapData.filter(item => item.isFeatured))


  useEffect(() => {
    let timer =  setTimeout(() => {
      currentIndex === items.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }, 2500)

    return () => clearTimeout(timer)
  })

  const {featuredImage, name, category, id} = items[currentIndex]
  return (
    <div className='carousel'>
      <div className='hero-container'>
        <div className='product-link'>
          <Link to={`/${category}/${id}`}>{name}</Link>
        </div>
        <img src={featuredImage} alt={name}/>
      </div>
      <div className='carousel-link-container'>
        {items.map((item, index) => {
          return (
            <img
              key={item.id}
              className={`carousel-link ${currentIndex === index ? 'selected' :  ''}`} 
              src={item.featuredImage} alt={item.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel