import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterCouncelling from './components/RegisterCouncelling';
import Home from './screens/Home';
import LoginSignup from './screens/LoginSignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
          <Route
            path="/registercouncelling"
            element={<RegisterCouncelling />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
