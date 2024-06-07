import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './LandingPage/LoginForm';
import SignUp from './LandingPage/SignupForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
