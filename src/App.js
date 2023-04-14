import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RegisterCouncelling from './components/RegisterCouncelling';
import Home from './screens/Home';
import LoginSignup from './screens/LoginSignup';
import { YufaabInstanceProvider } from './context/YufaabContext';
import YufaabInstance from './lib/api';

const App = () => {
  const yufaabInstance = new YufaabInstance(process.env.REACT_APP_BACKEND_URL);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
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
