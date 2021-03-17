import React from 'react'

const ImageContainer = ({images, keys, currentIndex, setCurrentIndex}) => {
  return (
    <div className='image-container'>
      <img 
        src={images[keys[currentIndex]]}
        alt={keys[currentIndex]}
        className='main-image'
      />
      <div className='images-container'>
        {Object.keys(images).map((key, index) => 
          <img
            key={`image-${index}`}
            src={images[key]} 
            onClick={() => setCurrentIndex(keys.indexOf(key))}
            alt=''
            className={`item-images ${currentIndex === keys.indexOf(key) ? 'selected' : ''}`}
          />)}
      </div>
    </div>
  )
}

export default ImageContainer