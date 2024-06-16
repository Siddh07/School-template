// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/School/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
