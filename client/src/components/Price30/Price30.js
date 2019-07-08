import React, { Component } from 'react';
import ViewOrder from '../ViewOrder/ViewOrder';
import OrderSuccess from '../OrderSuccess/OrderSuccess';
import { Route, Switch, Link } from 'react-router-dom';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';

export default class Price30 extends Component {

    render() {
        return (
            <div>
                <LoggedNavbar />
                <ViewOrder orders={this.orders} />
                <Link to="/ordersuccess"><p>Pay 30 euro</p></Link>
                <Switch>
                    <Route path="/ordersuccess" component={OrderSuccess} />
                </Switch>
            </div>
        )
    }
}