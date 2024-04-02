import React, { useState, useEffect } from 'react';

import './Food.css';

import Card from '../Food_Comp/Card/Card';
import Cart from '../Food_Comp/Cart/Cart';

import { getData } from '../../db/db';

const tg = window.Telegram.WebApp;

tg.MainButton.color = '#8a2be2';

function Food() {
  // ---- TG
  useEffect(() => {
    tg.ready();
  });

  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const foods = getData();

  // ---- ADD
  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  // ---- REMOVE
  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  // ---- CHECKOUT
  const onCheckout = () => {
    const data = {
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      totalPrice: calculateTotalPrice()
    };

    tg.sendData(JSON.stringify(data));
  };

// ---- PAY BUTTON WITH SEND
  useEffect(() => {
    const handleMainButtonClick = () => {
      onCheckout();
    };
  
    tg.MainButton.onClick(handleMainButtonClick);
  
    return () => {
      tg.MainButton.offClick(handleMainButtonClick);
    };
  }, [onCheckout]);  

  // ---- CALCULATE
  const calculateTotalPrice = () => {
    return cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  };

  // Показываем кнопку Pay только если корзина не пуста
  useEffect(() => {
    if (isCartEmpty) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.text = 'Pay';
      tg.MainButton.show();
    }
  }, [isCartEmpty]);

  // Проверяем, пуста ли корзина и показываем/скрываем кнопку
  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);


  return (
    <>
      <h1 className="heading">Marketplace</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map((food) => (
          <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}

export default Food;