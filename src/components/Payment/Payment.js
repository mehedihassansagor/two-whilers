import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Ie12WHtcijJBlun3mfts2e6IeyQunnWg17Egq2XT2r5ktM4odHJQzocGW75RH6m8ZxskSF9t4dYBhdN4RJqI60d00TjHoQIQN');

const Payment = () => {
    return (
        <div>
            <h3>Payment</h3>
            <Elements stripe={stripePromise}>
            <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
            </Elements>
        </div>
    );
};

export default Payment;