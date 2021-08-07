import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JLd4KDkzMRUUrolSzlC3tQGAURLOvY59EBPC3QSIv60dHt9Dp3gpaVWvQpnIqDfg4sAlLTzjfGyRAP8j4Wu1TxP00LRJSXHNg'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN component'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            amount={priceForStripe}
        />
    )
}

export default StripeCheckoutButton