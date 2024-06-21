import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Auth from './components/Auth';
import About from './components/About';
import Learning from './components/Learning';
import Parent from './components/Parent';
import News from './components/News';

function App() {
  return (
    <Router basename="/School/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/learning" element={<Learning />}/>
          <Route path="/parent" element={<Parent />} /> 
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
