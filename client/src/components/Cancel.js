import React, { Component } from 'react';
import LoggedNavbar from '../components/LoggedNavbar/LoggedNavbar'

export default class Cancel extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <h1>Order cancelled!</h1>
                <p>It's ok if you changed your mind. We wish you all the best in your relationship. We are always here for you :)</p>

            </div>
        )
    }
}