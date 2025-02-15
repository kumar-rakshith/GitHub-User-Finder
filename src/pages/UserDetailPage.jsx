import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserDetail from '../components/UserDetail';
import Loader from '../components/Loader';

const UserDetailPage = ({ isDarkMode }) => { 
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError('');
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
           Authorization: `Bearer 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`, 
          },
        });
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
          headers: {
            Authorization: `Bearer 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`, 
          },
        });
        setUserData(userResponse.data);
        const sortedRepos = reposResponse.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setReposData(sortedRepos.slice(0, 5)); 
      } catch (err) {
        setError('User not found or an error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className={`min-h-screen py-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {isLoading && <Loader />}
      {error && <div className="text-center text-red-500">{error}</div>}
      {userData && <UserDetail selectedUser={userData} reposData={reposData} isDarkMode={isDarkMode} />}
    </div>
  );
};

export default UserDetailPage;
