import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-card">
        <h2>Proceed to Checkout</h2>
        <p className="checkout-subtitle">
          Enter your card details to complete payment
        </p>
        
        {/* Card Payment */}
        <form className="payment-form">
          <input type="text" placeholder="Cardholder Name" />
          <input type="text" placeholder="Card Number" />

          <div className="card-row">
            <input type="text" placeholder="MM / YY" />
            <input type="text" placeholder="CVV" />
          </div>

          <button type="submit">Pay Now</button>
        </form>

        <p className="secure-text"> Secure card payment</p>
      </div>
    </div>
  );
};

export default Checkout;
