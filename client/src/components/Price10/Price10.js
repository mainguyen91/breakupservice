import React, { Component } from 'react'
import ViewOrder from '../ViewOrder/ViewOrder'
import { Route, Switch, Link } from 'react-router-dom';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';
import Payment10 from '../Payment10';
import "../ViewOrder/ViewOrder.css";
import Cancel from "../Cancel/Cancel";
import OrderSuccess from '../OrderSuccess/OrderSuccess';

export default class Price10 extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="view-order">
                    <ViewOrder orders={this.orders} />
                    <p className="paypal">Please pay 10 euro with the PayPal button below:</p>
                    <Payment10 />
                    <Link to="/cancel"><p className="cancel-order">Cancel this order</p></Link>
                    <p className="appendix">&#42;STBE - "soon to be ex"</p>
                </div>
                <Switch>
                    <Route path="/ordersuccess" component={OrderSuccess} />
                    <Route path="/cancel" component={Cancel} />
                </Switch>
            </div>
        )
    }
}