// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavItems from "./components/NavItems";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Login from "./components/Login"; // Import Login component
import Signup from "./components/Signup"; // Import Signup component
import Footer from "./components/Footer"; // Import Footer component

function App() {
  return (
    <>
      <NavItems />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />  {/* Login Route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
      </Routes>
      <Footer /> {/* ✅ Moved outside of <Routes> */}
    </>
  );
}

export default App;