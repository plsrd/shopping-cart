import React from 'react'

const Cart = ({cartItems}) => {
  return (
    <div>
      {cartItems.map(item => (
        <h1>{item.item}</h1>
      ))}
    </div>
  ) 
}

export default Cart