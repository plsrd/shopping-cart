import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import keycapData from '../data/keycapData'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [featuredItems] = useState(keycapData.filter(item => item.isFeatured))


  useEffect(() => {
    let timer =  setTimeout(() => {
      currentIndex === featuredItems.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }, 2500)

    return () => clearTimeout(timer)
  })

  const {featuredImage, name, category, id} = featuredItems[currentIndex]
  return (
    <div className='carousel'>
      <div className='hero-container'>
        <div className='product-link'>
          <Link to={`/${category}/${id}`}>{name}</Link>
        </div>
        <img src={featuredImage} alt={name}/>
      </div>
      <div className='carousel-link-container'>
        {featuredItems.map(item => {
          return (
            <img className='carousel-link' src={item.featuredImage} alt={name}/>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel