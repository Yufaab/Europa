import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, NavBar } from './components';
import { Home } from './screens';

function App() {
  return (
    <div className="flex flex-col">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
