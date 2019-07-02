import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";


export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  onClick = e => {
    e.preventDefault();
    axios.get("/logout")
      .then(results => {
        if(results.data === true) {
          this.setState({redirect: true});
        } else {
          console.log("Something went wrong")
        }
      })
      .catch(error =>
        console.error(`There's an error: ${error.stack}`))
  }

  render() {
    if(this.setState.redirect === true) return <Redirect to="/" />

    else return (
      <div>
        <form onSubmit={this.onClick.bind(this)} >
          <input type="submit" value="logout" />
        </form>
      </div>
    )
  }
}

