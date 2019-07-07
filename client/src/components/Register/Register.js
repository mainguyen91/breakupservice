import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../Register/Register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            redirect: false
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }) //name is the input tag for "name" in the form
    }

    //function that listens for the submit event on form
    handleSubmit = e => {
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios
            .post('register', user)
            .then(results => {
                //set state for Form.js with results from the server to be sent to App.js (React)
                this.setState({
                    id: results.data.id,
                    name: results.data.name,
                    email: results.data.email,
                    password: results.data.password,
                    redirect: true
                })

            })
            .catch(error => console.error(`Something went wrong when posting user ${error.stack}`))


    }

    render() {
        if (this.state.redirect) return <Redirect to="/login" />
        else return (
            <div className="register">
                <Navbar />
                <div className="parent-container">
                <div className="register-container">    
                <h1 className="form-header">Create account</h1>
                <div className="register-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-block">
                        <label className="input-label">Name:</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <label className="input-label">Email:</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <label className="input-label">Password:</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <br />
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Register;
