import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AllOrders from '../AllOrders/AllOrders';

export default class Pricing extends Component {
    render() {
        return (
            <div>
                <h1>Order Successful!</h1>
                <p>Sit back, relax, we will take it from here.</p>

                <Link to="/viewallorders"><p>View Your Order History</p></Link>
                <Switch>
                    <Route path="/viewallorders" component={AllOrders} />
                </Switch>
            </div>
        )
    }
}