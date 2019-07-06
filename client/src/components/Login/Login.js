import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../Login/Login.css';
import zebra from "../../public/img/zebra.jpg"

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false,
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios
            .post('login', user)
            .then(results => {
                this.setState({
                    id: results.data.id,
                    email: results.data.email,
                    password: results.data.password,
                    redirect: true
                })

            })
            .catch(error => console.error(`Couldn't login: ${error.stack}`))
    }

    render() {
        if (this.state.redirect) return <Redirect to="/profile" />
        else return (
            <div className="login">
                <Navbar />
                <div className="two-boxes">
                <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                    <p className="modal-desc">Sign in to access your account</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="email" className="input-label">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" 
                            autoComplete="off"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required/>
                        </div>
                        <div className="input-block">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required/>
                        </div>
                        <div className="modal-buttons">
                            <button className="input-button" type="submit" value="Submit">Login</button>
                        </div>
                    </form>
                    <p className="sign-up">Don't have an account? <a href="/">Sign up now</a></p>
                </div>
                <div className="modal-right">
                    <img className="zebra" src={zebra} alt="" />
                </div>
                </div>
            </div>
                   
        
        )
    }
}
