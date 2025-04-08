import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutPayment";
import { Elements } from "@stripe/react-stripe-js";

const stripePublishableKey =
  "pk_test_51RBfto05DxE0eeiEjV9so6HQqNsLyniAA40QuSMVFrtzaubZxtHOOORuMzcEZSvwdcJjXa8WLCducZumog5AEFrd00OPZU7yzX";
//Publishable Key
const stripePromise = loadStripe(stripePublishableKey);

const PaymentPage = (props) => {
  const options = {
    mode: "payment",
    amount: 1000, // = $10.00 USD
    currency: "usd", // <- đổi thành USD
    // Fully customizable with appearance API.
    appearance: {
      theme: "flat",
    },
  };
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm {...props} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
