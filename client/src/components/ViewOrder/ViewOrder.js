import React, { Component } from 'react'
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import axios from 'axios';
import "../ViewOrder/ViewOrder.css"

export default class ViewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: {}
        }
    }
    componentDidMount() {
        axios
            .get('/overview')
            .then(resultsFromServer => {
                this.setState({ orders: resultsFromServer.data })
            })
            .catch(error => console.error(`Something went wrong when component mounted ${error.stack}`))
    }

    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="view-order">
                    <h1 className="order-header">Thank you for placing the order. This is an overview of your order:</h1>
                    <p>Your name as known by your STBE: {this.state.orders.nameClient}</p>
                    <p>Name of your STBE: {this.state.orders.nameSo}</p>
                    <p>Break-up method: {this.state.orders.service}</p>
                    <p>Contact details of your STBE: {this.state.orders.contactSo}</p>
                </div>
            </div>
        )
    }
}