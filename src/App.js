import React from "react";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
