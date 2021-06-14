import React from 'react';
import './App.css';
import {BrowserRouter as Switch,Router,Route, withRouter} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop.component.jsx';



function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    
    </Switch>
    </div>
  );
}

export default App;
