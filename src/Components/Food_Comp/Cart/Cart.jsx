import React from "react";
import "../Cart/Cart.css";
import Button from "../Button/Button";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://147.45.76.155:3000/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ /* данные заказа */ })
      });
      
      if (response.ok) {
        alert('Заказ получен!');
      } else {
        console.error('Ошибка создания заказа:', response.statusText);
        alert('Произошла ошибка при создании заказа');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      alert('Произошла ошибка при отправке запроса');
    }
  };
  

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : <span>Total Price: {totalPrice.toFixed(2)} EUR</span>}
      <br />
      {cartItems.length > 0 && (
        <Button
          title="Checkout"
          type="checkout"
          onClick={handleCheckout}  // запуск обработчика кнопки checkout
        />
      )}
    </div>
  );
};

export default Cart;