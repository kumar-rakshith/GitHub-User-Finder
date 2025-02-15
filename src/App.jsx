import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route path="/users" element={<UserListPage isDarkMode={isDarkMode}/>} />
          <Route path="/user/:username" element={<UserDetailPage isDarkMode={isDarkMode}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
