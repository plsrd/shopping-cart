import React, { useState, useEffect } from 'react'
import keycapData from '../data/keycapData'


const ItemDetail = ({match}) => {
  const [currentIndex, setCurrentIndex]=useState(0)
  const item = keycapData.find(item => item.id === match.params.id)
  const { images } = item
  const keys = Object.keys(images)

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={images[keys[currentIndex]]} alt={keys[currentIndex]}/>
      {Object.keys(images).map(key => 
        <img 
          src={images[key]} 
          onClick={() => setCurrentIndex(keys.indexOf(key))}
          alt={key}
        />)}
    </div>
  )
}

export default ItemDetail