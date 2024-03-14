// main/main.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../Main/main.css";

function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li><Link to="/main">Home</Link></li>
        <li><Link to="/food">Food</Link></li>
      </ul>
    </div>
  );
}

export default MenuPage;
