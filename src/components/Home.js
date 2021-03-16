import React from 'react'
//import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import About from './About'
import '../styles/home.css'

const Home = () => {

  return (
    <div className='home-container'>
        <Carousel />
        <About />
    </div>
  )
}

export default Home