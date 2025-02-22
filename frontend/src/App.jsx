import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavItems from "./components/NavItems";
import Home from "./home/Home";
import TimeTracker from "./home/TimeTracker";
import HomeTimeTracker from "./home/HomeTimeTracker";
import MoodTracker from "./home/MoodTracker";
import Tips from "./pages/Tips";
import MoodTrackerAfterL from "./home/Tips";

import Footer from "./components/Footer";


import Blog from "./blog/Blog";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Footer from "./components/Footer";
import StudentTT from "./pages/StudentTT";

function App() {
  const location = useLocation(); // Get current route

  // Routes where Navbar and Footer should be hidden
  const hideNavbarRoutes = ["/login", "/signup"];
  const hideFooterRoutes = ["/login", "/signup"];

  return (
    <>
      {/* Hide Navbar on login and signup pages */}
      {!hideNavbarRoutes.includes(location.pathname.toLowerCase()) && <NavItems />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/StudentTT" element={<StudentTT />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HomeTimeTracker" element={<HomeTimeTracker />} />
        <Route path="/MoodTracker" element={<MoodTracker />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path="/MoodTrackerAfterL" element={<MoodTrackerAfterL />} />


        {/* <Route path="/Footer" element={<Footer />} /> */}


        {/* <Route path="/TimeTracker" element={<TimeTracker />} /> */}
      </Routes>

      {/* Hide Footer on login and signup pages */}
      {!hideFooterRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
}

export default App;
