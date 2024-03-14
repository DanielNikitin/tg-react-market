import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./Components/Main/main";
import Food from "./Components/Food/Food";

const tg = window.Telegram.WebApp;

function App() {
// ---- TG
  useEffect(() => {
    tg.ready();
  });

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;