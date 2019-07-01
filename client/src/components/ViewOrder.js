import React, { Component } from 'react'
import Order from "./Order"

import axios from 'axios';
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
                console.log(resultsFromServer.data)
                this.setState({ orders: resultsFromServer.data })
            })
            .catch(error => console.error(`Something went wrong when component mounted ${error.stack}`))
    }

    render() {
        return (
            <div>
                <h1>Thank you for placing the order. This is an overview of your order:</h1>
                <p>Your name as known by your STBE: </p>{this.state.orders.nameClient}
                <p>Name of your STBE: </p>{this.state.orders.nameSo}
                <p>Break-up method: </p>{this.state.orders.service}
                <p>Contact details of your STBE: </p>{this.state.orders.contactSo}
            </div>
        )
    }
}