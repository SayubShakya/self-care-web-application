import React from 'react';
import NavItems from './components/NavItems'; // Adjust the path if needed
import Footer from './components/Footer'; // Adjust the path if needed

import Home from './home/Home';
import './App.css'; // Optional global styles

function App() {
  return (
    <div className="App">
      <NavItems /> {/*  Render the Navbar component */}
      <Home />
      <Footer /> {/*  Render the Footer component */}
    </div>
  );
}

export default App;