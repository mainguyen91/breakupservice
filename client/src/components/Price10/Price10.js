import React, { Component } from 'react';
import ViewOrder from '../ViewOrder/ViewOrder';
import OrderSuccess from '../OrderSuccess/OrderSuccess';
import Payment10 from '../Payment10';
import { Route, Switch, Link } from 'react-router-dom';

export default class Price10 extends Component {
    render() {
        return (
            <div>
                <ViewOrder orders={this.orders} />
                <Payment10 />
                <Link to="/ordersuccess"><p>Paid 10 euro</p></Link>
                <Switch>
                    <Route path="/ordersuccess" component={OrderSuccess} />
                </Switch>
            </div>
        )
    }
}