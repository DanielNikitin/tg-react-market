import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Food from "./Components/Food/Food";
import PageNotFound from "./Components/404/PageNotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Food />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;