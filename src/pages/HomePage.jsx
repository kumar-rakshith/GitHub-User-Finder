import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ isDarkMode }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        document.body.style.overflow = 'hidden';  
        
       
        return () => {
            document.body.style.overflow = '';  l
        };
    }, []);

    const handleSearch = () => {
        if (username.trim() !== '') {
            navigate(`/users?search=${username}`);
        }
    };

    const handleClear = () => {
        setUsername('');
    };

    return (
        <div
            className={`h-screen mt-24 flex flex-col items-center py-10 px-4 sm:px-6 md:px-8 lg:px-16 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
            
            <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 transition-transform duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
            >
                GitHub User Finder
            </h1>
            <p
                className={`text-base sm:text-lg text-center mb-6 transition-opacity duration-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
                Find and explore GitHub users instantly by searching their username.
            </p>

          
            <div
                className={`w-full max-w-lg p-6 shadow-xl rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
                <div className="relative">
                  
                    <input
                        type="text"
                        placeholder="Enter GitHub username"
                        className={`w-full p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ${isDarkMode ? 'border-gray-600 text-white bg-transparent' : 'border-gray-300 text-black bg-white'}`}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                 
                    {username && (
                        <button
                            onClick={handleClear}
                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-white' : ''}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    )}
                </div>

              
                <div className="flex justify-between items-center mt-4 space-x-2">
                    <button
                        onClick={handleSearch}
                        className={`w-full p-4 font-semibold rounded-md transition-all duration-300 focus:outline-none transform ${isDarkMode
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95 active:bg-indigo-800'
                            : 'bg-indigo-200 text-black hover:bg-indigo-300 hover:scale-105 active:scale-95 active:bg-indigo-400'
                            }`}
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <span>Find User</span>
                        </span>
                    </button>
                </div>

            </div>

            
            {username.trim() === '' && (
                <div
                    className={`mt-8 text-lg font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-opacity duration-500 opacity-75`}
                >
                    Start typing to search for GitHub users
                </div>
            )}
        </div>
    );
};

export default HomePage;
