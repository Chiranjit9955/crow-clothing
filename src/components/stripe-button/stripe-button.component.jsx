import React from "react";
import StripeCheckOut from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ojFa0DNhBiHKRIpUBr4pmPrK00Uh5Bau20";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckOut
      label="Pay Now"
      name="CRWN Clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
