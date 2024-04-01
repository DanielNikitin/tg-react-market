import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./Components/Main/main";
import Menu from "./Components/Menu/menu";
import Food from "./Components/Food/Food";

function App() {

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/food" element={<Food />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;