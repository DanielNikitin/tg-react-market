// main/main.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../Main/main.css";

function MenuPage() {
  const redirectToGame = () => {
    window.location.href = "https://tg-flappy.netlify.app";
  };
  
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li><button onClick={redirectToGame}>Game</button></li>
        <li><Link to="/food">Food</Link></li>
      </ul>
    </div>
  );
}

export default MenuPage;
