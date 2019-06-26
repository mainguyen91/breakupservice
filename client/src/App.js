import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About/About';
import Pricing from './components/Pricing';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/"><p>Home</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/pricing"><p>Pricing</p></Link>
        <Link to="/register"><p>Register</p></Link>
        <Link to="/login"><p>Log in</p></Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch> 
      </div>
    );
  }
}

export default App;
