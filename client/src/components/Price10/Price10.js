import React, { Component } from 'react';
import ViewOrder from '../ViewOrder/ViewOrder';
import OrderSuccess from '../OrderSuccess/OrderSuccess';
import Payment10 from '../Payment10';
import Cancel from '../Cancel'
import { Route, Switch, Link } from 'react-router-dom';

export default class Price10 extends Component {
    render() {
        return (
            <div>
                <ViewOrder orders={this.orders} />
                <p>Please pay 10 euro with the PayPal button below</p>
                <Payment10 />
                <Link to="/cancel"><p>Cancel this order</p></Link>
                <Switch>
                    <Route path="/ordersuccess" component={OrderSuccess} />
                    <Route path="/cancel" component={Cancel} />
                </Switch>
            </div>
        )
    }
}