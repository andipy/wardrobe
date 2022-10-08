import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import One from "./One";
import Two from "./Two";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/wardrobe/" element={<One />} />
      <Route path="/wardrobe/two" element={<Two />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
