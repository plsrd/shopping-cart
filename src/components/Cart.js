import React, { useState, useEffect } from 'react'

const Cart = ({cartItems}) => {
  console.log(cartItems)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let newTotal = 0
    cartItems.forEach(item => newTotal += (item.price * item.quantity))
    setTotal(newTotal)
  }, [])

  return (
    <div>
      {cartItems.map((item, index) => (
        <div 
          key={`cart-item-${index}`}
          className='cart-item'
        >
          <div className='cart-name-container'>
            <p>{item.item}</p>
            {item.variation !== '' ? <p>Variation: {item.variation}</p> : null}
          </div>
          <div className='cart-price-container'>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
          <p>{item.price * item.quantity}</p>
        </div>
      ))}
      <h1 style={{fontSize: '2em'}}>{total}</h1>
    </div>
  ) 
}

export default Cart