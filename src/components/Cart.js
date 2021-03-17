import React, { useState, useEffect } from 'react'

import '../styles/cart.css'

const Cart = ({cartItems, setCartItems}) => {
  const [total, setTotal] = useState(0)
  console.log(cartItems)

  useEffect(() => {
    let newTotal = 0
    cartItems.forEach(item => newTotal += (item.price * item.quantity))
    setTotal(newTotal)
  }, [cartItems])

  const handleClick = (itemToChange, method) => {
    const newQuantity = method === '-' ? itemToChange.quantity - 1 : itemToChange.quantity + 1
    if (newQuantity > 0){
      if (itemToChange.variation === '') {
        setCartItems(() =>
        cartItems.map(item => 
          item.name === itemToChange.name ? {...itemToChange, quantity: newQuantity} : item)
        )
      } else {
          setCartItems(() =>
          cartItems.map(item => 
            item.name === itemToChange.name && item.variation === itemToChange.variation ? 
            {...itemToChange, quantity: newQuantity} : item)
        )
      }
    } else {
      if (itemToChange.variation === '') {
        setCartItems(() =>
        cartItems.filter(item => 
          item.name !== itemToChange.name)
        )
      } else {
        setCartItems(() =>
        cartItems.filter(item => 
          item.name === itemToChange.name && item.variation === itemToChange.variation)
        )
      }
    }
  }

  return (
    <div className='cart'>
      <div className='cart-header'> 
        <p>Item</p>
        <p>Total</p>
      </div>
      {cartItems.map((item, index) => (
        <div 
          key={`cart-item-${index}`}
          className='cart-item'
        >
          <div className='cart-name-container'>
            <p className='cart-item-name'>{item.item}</p>
            {item.variation !== '' ? <p>Variation: {item.variation}</p> : null}
          </div>
          <div className='cart-price-container'>
            <p>${item.price}.00</p>
            <div className='quantity-container'>
              <button onClick={() => handleClick(item, '-')}>-</button>
              <p>x{item.quantity}</p>
              <button onClick={() => handleClick(item, '+')}>+</button>
            </div>
          </div>
          <p className='item-total'>{`$${item.price * item.quantity}.00`}</p>
        </div>
      ))}
      <p className='cart-total'>TOTAL: {`$${total}.00`}</p>
    </div>
  ) 
}

export default Cart