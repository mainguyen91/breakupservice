import React, { Component } from 'react'
import axios from 'axios';
export default class Pricing extends Component {
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
                this.setState({ users: resultsFromServer.data })
            })
            .catch(error => console.error(`Something went wrong when component mounted ${error.stack}`))
    }
    render() {
        return (
            <div>
                <h1>Thank you for placing the order. This is an overview of your order:</h1>

                <p>{this.props.order.nameClient}</p>
                <p>{this.props.order.nameSo}</p>


            </div>
        )
    }
}