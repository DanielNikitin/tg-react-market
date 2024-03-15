import React, { useState, useEffect } from 'react';

import Card from '../Food_Comp/Card/Card';
import Cart from '../Food_Comp/Cart/Cart';

import { getData } from '../../db/db';

const tg = window.Telegram.WebApp;

function Food() {
  // ---- TG
  useEffect(() => {
    tg.ready();
  });

  const [cartItems, setCartItems] = useState([]);

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
    tg.MainButton.text = "Pay";
    tg.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default Food;
