import React, { Component } from 'react';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';
import '../Cancel/Cancel.css';

export default class Cancel extends Component {
    render() {
        return (
            <div>
                <div className="cancel">
                    <LoggedNavbar />
                    <div className="cancel-body">
                    <h1>Order cancelled!</h1>
                    <p className="cancel-text">It's ok if you changed your mind. We wish you all the best in your relationship. We are always here for you <span role="img" aria-label="smile">🙂</span></p>
                    </div>
                </div>
            </div>
        )
    }
}