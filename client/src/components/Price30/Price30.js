import React, { Component } from 'react';
import ViewOrder from '../ViewOrder/ViewOrder';
import OrderSuccess from '../OrderSuccess/OrderSuccess';
import Payment30 from '../Payment30';
import { Route, Switch, Link } from 'react-router-dom';

export default class Price30 extends Component {

    render() {
        return (
            <div>
                <ViewOrder orders={this.orders} />
                <Payment30 />
                <Link to="/ordersuccess"><p>Paid 30 euro</p></Link>
                <Switch>
                    <Route path="/ordersuccess" component={OrderSuccess} />
                </Switch>
            </div>
        )
    }
}