import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RegisterCouncelling from './components/RegisterCouncelling';
import Home from './screens/Home';
import LoginSignup from './screens/LoginSignup';
import { YufaabInstanceProvider } from './context/YufaabContext';
import YufaabInstance from './lib/api';

const App = () => {
  const yufaabInstance = new YufaabInstance('http://localhost:1337');

  return (
    <GoogleOAuthProvider clientId="338277030676-4vv7ej7qd4a4980qlqmonemtnk2p4cat.apps.googleusercontent.com">
      <YufaabInstanceProvider value={{ yufaabInstance }}>
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
      </YufaabInstanceProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
