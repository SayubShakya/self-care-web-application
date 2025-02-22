import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "./user"; // Import the global user store
import "./Auth.css"; // Styles for Auth components

const Signup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const { createUsers } = useUserStore(); // Destructure the createUsers function from the store

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      age,
      type,
      phone,
      address,
      password,
    };

    // Call the createUsers function from the global store
    const { success, message } = await createUsers(newUser);

    if (success) {
      console.log("User created successfully:", message);
      // Optionally, redirect the user to another page (e.g., login)
    } else {
      console.error("Error creating user:", message);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="form">
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
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="Student">Student</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Retired">Retired</option>
                <option value="Housewife">Housewife</option>
              </select>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;