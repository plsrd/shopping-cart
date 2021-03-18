import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/reset.css'
import './styles/app.css'

import Shop from './components/Shop'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ItemDetail from './components/ItemDetail'
import Cart from './components/Cart'
import Footer from './components/Footer'

const App = () => {
  const [cartItems, setCartItems] =useState([])
  const [currentSelection, setCurrentSelection] = useState({
    item: '',
    variation: '',
    price: 0,
    quantity: 1
  })

  const addToCart = (item) => {
    setCartItems([...cartItems, currentSelection])
    setCurrentSelection({
      item: item.name,
      variation: '',
      price: item.price,
      quantity: 1
    })
  }
  
  return (
    <Router>
      <div className="App">
        <Navbar items={cartItems.length}/>
        <Switch>
          <Route exact path='/shopping-cart' component={Home} />
          <Route exact path='/shopping-cart/shop' component={Shop} />
          <Route path='/shopping-cart/shop/:id' render={props => 
            <ItemDetail 
              addToCart={addToCart} 
              currentSelection={currentSelection} 
              setCurrentSelection={setCurrentSelection}
            />
          }/>
          <Route path='/shopping-cart/cart' render={() => <Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
