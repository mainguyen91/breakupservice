import React, { Component } from 'react';
import ViewOrder from './ViewOrder';

export default class Pricing extends Component {

    render() {
        return (
            <div>
                <ViewOrder orders={this.state.orders} />
                <h1>Please pay 30 euro</h1>
            </div>
        )
    }
}