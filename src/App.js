import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop.component.jsx';
import Header from './components/header/header-component.jsx';
import signInAndSignUpPage from './pages/homepage/signin-signup/signin-signup.component'
import { auth } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
  });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInAndSignUpPage} />
      </Switch>
      </div>
    )
  }
  
}

export default App;
