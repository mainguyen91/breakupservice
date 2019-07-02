import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/Navbar.css'

export default class LoggedNavbar extends Component {

    render() {
        return (
            <div className="container">
                <ul className="nav">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/loggedhome"><li>Place order</li></Link>
                    <Link to="/viewallorders"><li>View order</li></Link>
                    <Link to="/logout" ><li>Log out</li></Link>
                </ul>
            </div>
        )
    }
}