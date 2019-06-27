import React, { Component } from 'react'

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: {}
        }
    }
    componentDidMount()
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