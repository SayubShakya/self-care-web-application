import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Make sure the CSS is imported

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with", email, password);
      // Add login logic here
    } else {
      console.log("Signing up with", name, email, password);
      // Add signup logic here
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-box ${!isLogin ? "flip" : ""}`}>
        <div className="form front">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="auth-footer">
            Don't have an account?
            <Link to="#" onClick={() => setIsLogin(false)} className="toggle-link">
              Sign up
            </Link>
          </div>
        </div>
        <div className="form back">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </form>
          <div className="auth-footer">
            Already have an account?
            <Link to="#" onClick={() => setIsLogin(true)} className="toggle-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;