import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [username, setUsername] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (username.trim() !== '') {
      navigate(`/users?search=${username}`);
    }
  };

  const handleClear = () => {
    setUsername('');
  };

  
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`p-4 ${isDarkMode ? 'bg-black' : 'bg-white'} text-${isDarkMode ? 'white' : 'black'} shadow-md `}
    >
      <div className="max-w-screen-xl mx-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold justify-start">
          GitHub User Finder
        </Link>
        <button
          className="lg:hidden p-2 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className="hidden lg:flex items-center">
          {!isHomePage && (
            <div className="relative flex items-center ml-4">
              <input
                type="text"
                placeholder="Search for users..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ${isDarkMode ? 'border-gray-600 text-white bg-transparent' : 'border-gray-300 text-black bg-white'}`}
              />
              {username && (
                <button
                  onClick={handleClear}
                  className={`absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-white' : ''}`}
                >
                  <i className="fa fa-times w-5 h-5"></i>
                </button>
              )}

              <button
                onClick={handleSearch}
                className={`ml-2 p-2 rounded-md ${isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-200 text-black'} hover:bg-indigo-700 transition duration-300`}
              >
                Search
              </button>
            </div>
          )}

         
          <button
            onClick={toggleDarkMode}
            className={`ml-8 p-2 rounded-full h-10 w-12 border-4 flex justify-center items-center ${isDarkMode ? 'border-white text-white' : 'border-black text-black'}`}
          >
            <i className={`fa ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-md`}></i>
          </button>
        </div>
      </div>

    
<div
  className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 right-0 w-full bg-${isDarkMode ? 'black' : 'white'} p-4`}
>
  
  <button
    className="absolute top-32 right-8 text-2xl z-50" 
    onClick={() => setIsMenuOpen(false)} 
  >
    <i className="fa fa-times text-gray-800"></i>
  </button>

 
  {!isHomePage && (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search for users..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ${isDarkMode ? 'border-gray-600 text-white bg-transparent' : 'border-gray-300 text-black bg-white'}`}
      />

     
      {username && (
        <button
          onClick={handleClear}
          className={`absolute right-4 top-1/4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-white' : ''}`}
        >
          <i className="fa fa-times w-5 h-5"></i>
        </button>
      )}

      <button
        onClick={handleSearch}
        className={`w-full p-2 mt-4 rounded-md ${isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-200 text-black'} hover:bg-indigo-700 transition duration-300`}
      >
        Search
      </button>
    </div>
  )}


  <div className="flex justify-center items-center mb-4">
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full h-10 w-20 border-4 flex justify-center items-center ${isDarkMode ? 'border-white text-white' : 'border-black text-black'}`}
    >
      <i className={`fa ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-md`}></i>
    </button>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
