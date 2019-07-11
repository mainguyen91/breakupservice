import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import '../Pricing/Pricing.css';

export default class Pricing extends Component {
    render() {
        return (
            <div className="pricing">
                <Navbar />
                <div className="main-pricing">
                    <div className="email">
                        <div className="price-plan">
                            <h1 className="price">10 &euro;</h1>
                            <p>per email</p>
                            <p>Includes your personalized message that we'll pass along to the desired recipient. <br />
                                Fully customized.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="price-plan">
                            <h1 className="price">30 &euro;</h1>
                            <p>per phone call</p>
                            <p>You choose the message, <br /> timing,<br />
                                the mood in which it should be delivered, <br />
                                option to support the recipient, if that's your wish. <br />
                                If you're at loss of words, we can craft the message ourselves based on your input.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
