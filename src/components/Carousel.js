import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import keycapData from '../data/keycapData'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [featuredItems] = useState(keycapData.filter(item => item.isFeatured))

  useEffect(() => {
    setTimeout(() => {
      currentIndex === featuredItems.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }, 2000)
  }, [currentIndex])

  const {featuredImage, name, category, id} = featuredItems[currentIndex]
  return (
    <div className='carousel'>
      <div>
        <Link to={`/${category}/${id}`}>{name}</Link>
      </div>
      <img src={featuredImage} />
    </div>
  )
}

export default Carousel