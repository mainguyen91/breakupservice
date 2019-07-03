import React, { Component } from 'react';
import ViewOrder from './ViewOrder';
import OrderSuccess from './OrderSuccess';
import { Route, Switch, Link } from 'react-router-dom';

export default class Price30 extends Component {

    render() {
        return (
            <div>
                <ViewOrder orders={this.orders} />
                <Link to="/ordersuccess"><p>Pay 30 euro</p></Link>
                <Switch>
                    <Route path="/ordersuccess" component={OrderSuccess} />
                </Switch>
            </div>
        )
    }
}