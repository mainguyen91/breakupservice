import React, { Component } from 'react';
import ViewOrder from '../ViewOrder/ViewOrder';
import OrderSuccess from '../OrderSuccess/OrderSuccess';
import Payment30 from '../Payment30';
import Cancel from '../Cancel/Cancel'
import { Route, Switch, Link } from 'react-router-dom';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';

export default class Price30 extends Component {

    render() {
        return (
            <div>
                <LoggedNavbar />
                <ViewOrder orders={this.orders} />
                <p>Please pay 30 euro with the PayPal button below</p>
                <Payment30 />
                <Link to="/cancel"><p>Cancel this order</p></Link>
            </div>
        )
    }
}