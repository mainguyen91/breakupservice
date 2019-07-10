import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';
import '../Order/Order.css';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameClient: "",
            nameSo: "",
            service: "",
            contactSo: "",
            situation: "",
            message: "",
            redirect: false
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }) //name is the input tag for "name" in the form
    }

    handleSubmit = e => {
        e.preventDefault();
        const order = {
            nameClient: this.state.nameClient,
            nameSo: this.state.nameSo,
            service: this.state.service,
            contactSo: this.state.contactSo,
            situation: this.state.situation,
            message: this.state.message
        }
        axios
            .post('/newOrder', order)
            .then(results => {
                this.setState({
                    id: results.data.id,
                    nameClient: results.data.nameClient,
                    nameSo: results.data.nameSo,
                    service: results.data.service,
                    contactSo: results.data.contactSo,
                    situation: results.data.situation,
                    message: results.data.message,
                    redirect: true
                })
            })
            .catch(error => console.error(`Something went wrong when posting order ${error.stack}`))
    }
    render() {
        if (this.state.redirect && this.state.service === 'email') return <Redirect to='/order/email' />
        else if (this.state.redirect && this.state.service === 'phone') return <Redirect to='/order/phone' />
        else
            return (
                <div className="order">
                    <LoggedNavbar />
                    <div className="parent-container">
                        <div className="order-container">
                            <h1 className="form-header">Place your order</h1>
                            <div className="order-form">
                                <form className="form" onSubmit={this.handleSubmit}>
                                    <div className="input-block">
                                        <label className="input-label">Your name:</label>
                                        <br />
                                        <input
                                            placeholder="Your name as known by soon-to-be-ex"
                                            type="text"
                                            name="nameClient"
                                            value={this.state.nameClient}
                                            onChange={this.handleChange}
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label className="input-label">STBE name:</label>
                                        <br />
                                        <input
                                            placeholder="The name of your soon-to-be-ex"
                                            type="text"
                                            name="nameSo"
                                            value={this.state.nameSo}
                                            onChange={this.handleChange}
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label className="input-label">Service:</label>
                                        <br />
                                        <div className="custom-select">
                                            <select
                                                type="text"
                                                name="service"
                                                value={this.state.service}
                                                onChange={this.handleChange}
                                                autoComplete='off'
                                                required
                                            >
                                                <option>Please select</option>
                                                <option value="email">Email 10 euro</option>
                                                <option value="phone">Phone 30 euro</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-block">
                                        <label className="input-label">Contact details:</label>
                                        <br />
                                        <input
                                            placeholder="The contact info of your soon-to-be-ex"
                                            type="text"
                                            name="contactSo"
                                            value={this.state.contactSo}
                                            onChange={this.handleChange}
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label className="input-label">Situation:</label>
                                        <br />
                                        <input
                                            placeholder="Short description of your situation for customized service"
                                            type="text"
                                            name="situation"
                                            value={this.state.situation}
                                            onChange={this.handleChange}
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label className="input-label">Message:</label>
                                        <br />
                                        <input
                                            placeholder="This field is not required; share whatever you need"
                                            type="text"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            autoComplete='off'
                                        />
                                    </div>
                                    <br />
                                    <input className="submit-button" type="submit" value="Submit" />
                                </form >
                            </div>
                        </div>
                    </div>
                </div >
            )
    }
}
export default Order;
