import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RegisterCouncelling from './components/RegisterCouncelling';
import LoginSignup from './screens/LoginSignup';
import { YufaabInstanceProvider } from './context/YufaabContext';
import YufaabInstance from './lib/api';
import { NavBar } from './components';
import { Home } from './screens';
import Details from './screens/Details';
import userStore from './store/userStore';
import Review from './screens/Review';
import MyOrders from './screens/MyOrders';

const App = () => {
  const yufaabInstance = new YufaabInstance(process.env.REACT_APP_BACKEND_URL);
  const token = yufaabInstance.getToken();
  const setToken = userStore((state) => state.setToken);

  if (token) {
    setToken(token);
  }

  console.log(token);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <YufaabInstanceProvider value={{ yufaabInstance }}>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/details" element={<Details />} />
              {!token && <Route path="/login" element={<LoginSignup />} />}
              <Route
                path="/registercouncelling"
                element={<RegisterCouncelling />}
              />
              <Route path="/" element={<Home />} />
              <Route path="/review" element={<Review />} />
              <Route path="/myorders" element={<MyOrders />} />
            </Routes>
          </div>
        </Router>
      </YufaabInstanceProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
