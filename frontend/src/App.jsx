import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavItems from "./components/NavItems";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  const location = useLocation(); // Get current route

  // Routes where Navbar and Footer should be hidden
  const hideNavbarRoutes = ["/login", "/Signup", "/NavItems"];
  const hideFooterRoutes = ["/login", "/Signup"];

  return (
    <>
      {/* Hide Navbar on login and signup pages */}
      {!hideNavbarRoutes.includes(location.pathname) && <NavItems />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Hide Footer on login and signup pages */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
