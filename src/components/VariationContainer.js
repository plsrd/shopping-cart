import React from 'react' 

const VariationContainer = ({variations, handleClick, currentSelection }) => {

  return (
    <div className='variations-container'>
      {variations.map((variation, index) => (
        <button 
          key={`variation-${index}`}
          onClick={() => handleClick(variation)}
          className={`variation-btn ${currentSelection.variation === variation.name ? 'selected-variation' : ''}`}
        >
            {variation.name}
        </button>
      ))}
      <p className='current-selection'>
          {currentSelection.item !== '' ? `Current selection: ${currentSelection.variation}` : 'Select Variation'}
      </p>
    </div>
  )
}

export default VariationContainer