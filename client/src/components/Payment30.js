import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Payment30 extends React.Component {
    render() {
        const onSuccess = (payment) => {
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

        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}