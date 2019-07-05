import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
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
            <div>
                <Navbar />
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            autoComplete="off"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
