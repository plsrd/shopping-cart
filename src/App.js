import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/reset.css'
import './styles/app.css'

import Shop from './components/Shop'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ItemDetail from './components/ItemDetail'

const App = () => {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/shop/:id' component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
