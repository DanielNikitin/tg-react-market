import React from "react";
import "../Cart/Cart.css";
// import Button from "../Button/Button";


const Cart = ({ cartItems, onCheckout }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : <span>Total Price: {totalPrice.toFixed(2)} EUR</span>}
      <br />
      {/* {cartItems.length > 0 && (
        <Button
          title="Checkout"
          type="checkout"
          onClick={onCheckout}  // запуск обработчика кнопки checkout
        />
      )} */}
    </div>
  );
};

export default Cart;