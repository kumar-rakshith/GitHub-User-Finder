import React from 'react';

const UserList = ({ userList, handleUserSelect, isDarkMode }) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}
    >
      {userList.map((user) => (
        <div
          key={user.id}
          className={`flex flex-col justify-between items-center p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 ${
            isDarkMode
              ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700'
              : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'
          }`}
          onClick={() => handleUserSelect(user.login)}
        >
          <img
            src={user.avatar_url}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-500"
          />
          <div className="text-center">
            <p className="text-lg font-semibold truncate">{user.login}</p>
            <p className="text-sm text-gray-600">{user.followers} Followers</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
