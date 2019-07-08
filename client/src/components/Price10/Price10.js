import React, { Component } from 'react'
import ViewOrder from '../ViewOrder/ViewOrder'
import { Link } from 'react-router-dom';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';
import Payment10 from '../Payment10';

export default class Price10 extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <ViewOrder orders={this.orders} />
                <p>Please pay 10 euro with the PayPal button below</p>
                <Payment10 />
                <Link to="/cancel"><p>Cancel this order</p></Link>
            </div>
        )
    }
}