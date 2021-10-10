

import './Normalize.css';
import React from 'react';
import Menu from './components/menu/menu';
import Home from './pages/Home/Home';
import Earth from'./pages/Galaxy/Earth'
import Jupiter from'./pages/Galaxy/Jupiter'
import Mars from'./pages/Galaxy/Mars'
import Mercury from'./pages/Galaxy/Mercury'
import Neptune from'./pages/Galaxy/Neptune'
import Saturn from'./pages/Galaxy/Saturn'
import Uranus from'./pages/Galaxy/Uranus'
import Venus from'./pages/Galaxy/Venus'

import { Route} from 'wouter'

function App() {

  return (
    <>
      <Menu/>
      <Route
          component={Home}
          path='/planets'
        />
       <Route
          component={Earth}
          path='/Earth'
        />
        <Route
          component={Jupiter}
          path='/Jupiter'
        />
        <Route
          component={Mars}
          path='/Mars'
        />
        <Route
          component={Mercury}
          path='/Mercury'
        />
        <Route
          component={Neptune}
          path='/Neptune'
        />
        <Route
          component={Saturn}
          path='/Saturn'
        />
        <Route
          component={Uranus}
          path='/Uranus'
        />
        <Route
          component={Venus}
          path='/Venus'
        />
        <div><Home/></div>
    </>
  )
}

export default App;
