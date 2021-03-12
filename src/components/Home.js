import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import About from './About'
import '../styles/home.css'

const Home = () => {

  return (
    <div className='home-container'>
        <h2>Featured Items</h2>
        <Carousel />
        <About />
    </div>
  )
}

export default Home