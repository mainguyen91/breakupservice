import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Pricing from './components/Pricing';
import Register from './components/Register';
import Login from './components/Login';
import Order from './components/Order';
import Price10 from './components/Price10';
import Price30 from './components/Price30'
import Logout from './components/Logout/Logout';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Order} />
          <Route path="/login" component={Login} />
          <Route path="/order/email" component={Price10} />
          <Route path="/order/phone" component={Price30} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
