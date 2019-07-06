import React, { Component } from 'react';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';

import axios from 'axios';
export default class AllOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        axios
            .get('/viewallorders')
            .then(resultsFromServer => {
                console.log(resultsFromServer.data)
                this.setState({ orders: resultsFromServer.data })
            })
            .catch(error => console.error(`Something went wrong when component mounted ${error.stack}`))
    }

    render() {
        const finalOrder = this.state.orders.reverse().map((order, index) => (

            <div key={index}>
                <p>Order number: {order.id}</p>
                <p>At: {order.createdAt}</p>
                <p>Your name as known by your STBE: {order.nameClient}</p>
                <p>Name of your STBE: {order.nameSo}</p>
                <p>Break-up method: {order.service}</p>
                <p>Contact details of your STBE: {order.contactSo}</p>
                <p>Status of order: {order.status}</p>
                <p>--------------------</p>
            </div>
        ))
        return (
            <div>
                <LoggedNavbar />
                <h1>Thank you for using our service. This is an overview of ALL orders:</h1>
                {finalOrder}


            </div>
        )
    }
}