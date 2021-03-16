import React from 'react'

const ItemImages = ({images, handleSelection, keys, currentIndex}) => {
  return (  
    <div>
      <img 
        src={images[keys[currentIndex]]}
        alt={keys[currentIndex]}
        className='main-image'
      />
      <div className='images-container'>
        {Object.keys(images).map(key => 
          <img 
            src={images[key]} 
            onClick={handleSelection(key)}
            alt=''
            className='item-images'
          />)}
      </div>
    </div>
  )
}

export default ItemImages