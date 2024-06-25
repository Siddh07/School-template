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
import Safety from './components/Parent/Safety';
import Support from './components/Support';

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
          <Route path="/safety" element={<Safety />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
