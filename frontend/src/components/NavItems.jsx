import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={headerFixed ? "fixed-header" : ""}>
      <div className="container">
        <div className="header-top-area">
          <Link to="/signup" className="lab-btn me-3">
            <span>Create Account</span>
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
