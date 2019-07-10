import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AllOrders from '../AllOrders/AllOrders';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';
import "../ViewOrder/ViewOrder.css";

export default class OrderSuccess extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <h1 className="order-header">Order Successful!</h1>
                <p className="order-details">Sit back, relax, we will take it from here.</p>

                <Link to="/viewallorders"><p className="cancel-order">View Your Order History</p></Link>
                <Switch>
                    <Route path="/viewallorders" component={AllOrders} />
                </Switch>
            </div>
        )
    }
}