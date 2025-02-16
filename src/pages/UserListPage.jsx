import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';
import Loader from '../components/Loader'; 

const UserListPage = ({ isDarkMode }) => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  useEffect(() => {
    const fetchUserList = async () => {
      if (searchQuery) {
        setIsLoading(true);
        setError('');
        try {
          const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}&per_page=8`,);
          const users = response.data.items;
    
       
          const updatedUsers = await Promise.all(
            users.map(async (user) => {
              const userDetails = await axios.get(`https://api.github.com/users/${user.login}`, );
              return {
                ...user,
                followers: userDetails.data.followers, 
              };
            })
          );
    
          setUserList(updatedUsers);
        } catch (err) {
          setError('Error fetching users.');
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    fetchUserList();
  }, [searchQuery]);

  const handleUserSelect = (login) => {
    navigate(`/user/${login}`);
  };

  return (
    <div
      className={`min-h-screen py-10 m-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader /> 
        </div>
      ) : error ? (
        <div className="text-center   text-red-500 text-lg sm:text-xl">{error}</div>
      ) : userList.length > 0 ? (
        <UserList userList={userList} handleUserSelect={handleUserSelect} isDarkMode={isDarkMode} />
      ) : (
        <div className="text-center  text-red-500 text-lg sm:text-xl">No users found</div>
      )}
    </div>
  );
};

export default UserListPage;
