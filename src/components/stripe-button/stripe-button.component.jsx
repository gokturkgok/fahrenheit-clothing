import React from 'react';
import StripeCheckout from "react-stripe-checkout";

// stripe wants the payments in cents
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HYa8lJ9wGbG5T5rPxammfTCcFf8P1b4HLpnOSsXaDUnyOoSRLQehVVF9UOEkdH5rnIG0PRsoZ0fDDBbANeNCxpG005APxFXRf";
    
    const onToken = token => {
        console.log(token);
        alert('payment is successful');
    }

    return (
      <StripeCheckout
        label="Pay Now"
        name="Fahrenheit Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    );
};

export default StripeCheckoutButton;