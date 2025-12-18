import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import About from "./Components/About"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
