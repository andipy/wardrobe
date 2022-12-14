import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Intro from "./Intro";
import One from "./One";
import Two from "./Two";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
