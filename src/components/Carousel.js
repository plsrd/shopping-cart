import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../images/ck-artisan/hero1.webp'
import hero5 from '../images/ck-artisan/hero5.webp'
import hero6 from '../images/ck-artisan/hero6.webp'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselItems = [
    {
      image: hero1,
      path:'/keycaps',
      description:'hero1'
    },
    {
      image: hero5,
      path:'/keycaps',
      description:'hero5'
    },
    {
      image: hero6,
      path:'/keycaps',
      description:'hero6'
    },

  ]

  useEffect(() => {
    setTimeout(() => {
      currentIndex === carouselItems.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }, 2000)
  }, [currentIndex])

  const {image, description, path} = carouselItems[currentIndex]
  return (
    <div className='carousel'>
      <div>
        <Link to={path}>{description}</Link>
      </div>
      <img src={image} />
    </div>
  )
}

export default Carousel