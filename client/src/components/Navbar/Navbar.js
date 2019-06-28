import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/Navbar.css'

export default class LoginNavbar extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/pricing"><li>Pricing</li></Link>
                    <Link to="/register"><li>Register</li></Link>
                    <Link to="/login"><li>Log in</li></Link>
                </ul>
            </div>
        )
    }
}
