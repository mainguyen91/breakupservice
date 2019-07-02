import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import LoggedNavbar from './LoggedNavbar/LoggedNavbar';

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

    //function that listens for the submit event on form
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
                console.log(results)
                //set state for Form.js with results from the server to be sent to App.js (React)
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
                <div>
                    <LoggedNavbar />
                    <h1>Order Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Your name:</label>
                            <br />
                            <input
                                placeholder="Your name as known by SO"
                                type="text"
                                name="nameClient"
                                value={this.state.nameClient}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>SO name:</label>
                            <br />
                            <input
                                placeholder="The name of your SO"
                                type="text"
                                name="nameSo"
                                value={this.state.nameSo}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Service:</label>
                            <br />
                            <select
                                type="text"
                                name="service"
                                value={this.state.service}
                                onChange={this.handleChange}
                                required
                            >
                                <option>Please select</option>
                                <option value="email">Email 10 euro</option>
                                <option value="phone">Phone 30 euro</option>
                            </select>
                        </div>
                        <div>
                            <label>Contact detail:</label>
                            <br />
                            <input
                                placeholder="The contact info of your SO needed for required service"
                                type="text"
                                name="contactSo"
                                value={this.state.contactSo}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Situation:</label>
                            <br />
                            <input
                                placeholder="Short description of your situation to help us tailor the message to SO"
                                type="text"
                                name="situation"
                                value={this.state.situation}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Message:</label>
                            <br />
                            <input
                                placeholder="This field is not required. Please fill in if there is a certain message you want to send to SO"
                                type="text"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange}

                            />
                        </div>
                        <br />
                        <input type="submit" value="Submit" />
                    </form >
                </div >
            )
    }
}
export default Order;
