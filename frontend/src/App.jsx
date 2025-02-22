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
  const hideNavbarRoutes = ["/login", "/signup"]; // Routes without Navbar
  const hideFooterRoutes = ["/signup", "/login"]; // Routes without Footer

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavItems />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;