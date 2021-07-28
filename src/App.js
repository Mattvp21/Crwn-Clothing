import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop.component.jsx';
import Header from './components/header/header-component.jsx';
import signInAndSignUpPage from './pages/homepage/signin-signup/signin-signup.component'



function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={signInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
