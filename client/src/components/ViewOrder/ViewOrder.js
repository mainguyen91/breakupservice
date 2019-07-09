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
                    <h1 className="order-header">Thank you for placing the order. This is the overview:</h1>
                    <p className="order-details">Your name as known by your STBE: <span className="details">{this.state.orders.nameClient}</span></p>
                    <p className="order-details">Name of your STBE: <span className="details">{this.state.orders.nameSo}</span></p>
                    <p className="order-details">Break-up method: <span className="details">{this.state.orders.service}</span></p>
                    <p className="order-details">Contact details of your STBE: <span className="details">{this.state.orders.contactSo}</span></p>
                </div>
            </div>
        )
    }
}