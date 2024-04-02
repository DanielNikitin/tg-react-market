import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Main from "./Components/Main/main";
import Menu from "./Components/Menu/menu";
import Food from "./Components/Food/Food";
import PageNotFound from "./Components/404/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/menu">Menu </Link> */}
        {/* <Link to="/food">Market </Link> */}
        <Routes>
          <Route path="/" element={<PageNotFound />} />
          <Route path="/main" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/food" element={<Food />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;