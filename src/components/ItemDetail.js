import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import keycapData from '../data/keycapData'

import '../styles/itemDetail.css'


const ItemDetail = ({match, addToCart}) => {
  const item = keycapData.find(item => item.id === match.params.id)
  const { images, id, name, price, variations, description } = item
  const [currentIndex, setCurrentIndex]=useState(0)
  const [currentSelection, setCurrentSelection] = useState({
    item: name,
    variation: '',
    price: price,
    quantity: 0
  })
  const [adding, setAdding] = useState(false)

  const keys = Object.keys(images)

  const handleVariationClick = (variation) => {
    setCurrentIndex(keys.indexOf(variation.id))
    setCurrentSelection({
      ...currentSelection,
      variation: variation.name,
    })
  }

  const handleChange = (e) => {
    if  (currentSelection.item !== '') { setCurrentSelection({...currentSelection, quantity: e.target.value}) }
  }

  const handleAddClick = () => {
    if(currentSelection.item === '') return
    addToCart(currentSelection)
    setAdding(true)
  }

  useEffect(() => {
    item.variations.length > 0 ? setCurrentSelection(currentSelection) : setCurrentSelection({ ...currentSelection, item: name})
  }, [])

  useEffect(() => {
    setTimeout(() => setAdding(false), 1000)
  }, [adding])

  return (
    <div className='item-detail-container'>
      <p className='item-name'>{name}</p>
      <div className='detail-header'>
        <div className='image-container'>
          <img 
            src={images[keys[currentIndex]]}
            alt={keys[currentIndex]}
            className='main-image'
          />
          <div className='images-container'>
            {Object.keys(images).map(key => 
              <img 
                src={images[key]} 
                onClick={() => setCurrentIndex(keys.indexOf(key))}
                alt=''
                className={`item-images ${currentIndex === keys.indexOf(key) ? 'selected' : ''}`}
              />)}
          </div>
        </div>
      </div>
      <div className='info-container'>
        <div className='description-container'>
          <p className='description-header'>{description.header}</p>
          <p className='description-body'>{description.body}</p>
        </div>
        <div className='options-container'>
          <p className='price'>${price}</p>
          <div className='variations-container'>
            {variations.length > 0 ? variations.map(variation => (
              <button onClick={() => handleVariationClick(variation)}>{variation.name}</button>
            )) : null}
          </div>
          {variations.length > 0 ? (
            <p className='current-selection'>
                {currentSelection.item !== '' ? `Current selection: ${currentSelection.variation}` : 'Select Variation'}
            </p>) : null}
          <label>Quantity
            <select
              name='quantity' 
              value={currentSelection.quantity} 
              onChange={handleChange}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </label>
          <button 
            className={`add-btn${adding ? ' adding' : ''}` } 
            onClick={handleAddClick}>
              {adding === false ? 'Add to cart' : 'Added!'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ItemDetail)