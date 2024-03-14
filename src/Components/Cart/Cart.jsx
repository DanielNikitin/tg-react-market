import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
// import { loadStripe } from "@stripe/stripe-js";  // stripe.com


function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  // const makePayment = async () => {
  //   const stripe = await loadStripe("pk_live_51Ou1aNP9lLnwPkwIXL16K9BAlr0XZ2i9UaubUw7gkwlPh69EAWL2sf2wI2l8XB8gUZrd5K7tbucwaChp3xuH00F300O1WpQHfy");
  // }


  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart " : <span>Total Price: {totalPrice.toFixed(2)} EUR</span>}
      <br />
      <Button
        title={`${cartItems.length === 0 ? "Order" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;