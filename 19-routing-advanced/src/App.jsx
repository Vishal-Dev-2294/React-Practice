import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import NotFound from "./pages/notFound";
import MenCollection from "./pages/menCollection";
import WomenCollection from "./pages/WomenCollection";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import Coursesdetail from "./pages/Coursesdetail";
import Navbar2 from "./Components/Navbar2";

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* Dynamic routing */}
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Courses/:Coursesdetail" element={<Coursesdetail />} />
        {/* Nested Routing */}
        <Route path="/Contact" element={<Contact />}> 
          <Route path="Men" element={<MenCollection />} />
          <Route path="Women" element={<WomenCollection />} />
          <Route path="Kids" element={<Kids />} />
        </Route>
        {/* Agar wo / ke bad kuch bhi and sand dale to wo nich wale rute pe chala jaega */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
