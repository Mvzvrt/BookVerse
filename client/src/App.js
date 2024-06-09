import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './LandingPage/LoginForm';
import SignUp from './LandingPage/SignupForm';
import Main from './MainPage/Main';
import BookDetail from './MainPage/Books/BookDetails';
import ProfilePage from './MainPage/User/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/main" element={<Main />}/>
        <Route path="/book/:id" element={<BookDetail />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
