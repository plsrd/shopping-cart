import React from 'react'

const Cart = ({cartItems}) => {
  console.log(cartItems)
  return (
    <div>
      {cartItems.map(item => (
        <>
          <h1>{item.item}</h1>
          <p>{item.variation}</p>
          <p>{item.id}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </>
      ))}
    </div>
  ) 
}

export default Cart