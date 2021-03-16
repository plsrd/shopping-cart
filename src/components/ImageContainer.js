import React from 'react'


const ImageContainer = ({images}) => {

  return (
    <div className='image-container'>
      {Object.keys(images).map(key => <img src={images[key]} />)}
    </div>
  )
}

export default ImageContainer