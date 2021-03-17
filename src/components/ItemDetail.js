import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import keycapData from '../data/keycapData'
import ImageContainer from './ImageContainer'
import VariationContainer from './VariationContainer'
import '../styles/itemDetail.css'

const ItemDetail = ({match, addToCart, currentSelection, setCurrentSelection}) => {
  const item = keycapData.find(item => item.id === match.params.id)
  const { images, name, price, variations, description } = item
  const [currentIndex, setCurrentIndex]=useState(0)
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
    if(variations.length > 0 && currentSelection.variation === '') return
    addToCart()
    setAdding(true)
    setCurrentSelection({...currentSelection, item: name})
  }

  useEffect(() => {
    setCurrentSelection({...currentSelection, item: name, price: price})
  }, [])

  useEffect(() => {
    let timer = setTimeout(() => setAdding(false), 1000)

    return () => clearTimeout(timer)
  }, [adding])

  return (
    <div className='item-detail-container'>
      <p className='item-name'>{name}</p>
      <div className='detail-header'>
        <ImageContainer 
          images={images}
          keys={keys}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className='info-container'>
        <div className='description-container'>
          <p className='description-header'>{description.header}</p>
          <p className='description-body'>{description.body}</p>
        </div>
        <div className='options-container'>
          <p className='price'>${price}</p>
          {variations.length > 0 ? 
            <VariationContainer 
              variations={variations}
              handleClick={handleVariationClick}
              currentSelection={currentSelection}
           /> : null}
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
