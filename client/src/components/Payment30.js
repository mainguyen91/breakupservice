import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Redirect } from 'react-router-dom';

export default class Payment30 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    render() {
        const onSuccess = (payment) => {
            this.setState({ redirect: true })
            console.log("The payment was succeeded!", payment);
        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        let env = 'sandbox';
        let currency = 'EUR';
        let total = 30;

        const client = {
            sandbox: 'Aap9qQcFHSW-yMiFCuEWU4FdBzXP_G1ViSO_B2bsFzLB9vKSQNjzarxLFl_8VZN1aiM7iM30aUQN_E35'
        }
        if (this.state.redirect) return <Redirect to='/ordersuccess' />
        else return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}