// Main.jsx
import React from 'react';
import './main.css';
import logo from './images/LOGO512.png';

function Main() {
  return (
    <div className="main-content">
      <h1>Welcome to DAILY CUSTOMS GARAGE</h1>
      <img src={logo} alt="Welcome" /> {/* Вот здесь используйте простые скобки */}
      <p>This is the main page of our website. Feel free to explore!</p>
    </div>
  );
}

export default Main;
