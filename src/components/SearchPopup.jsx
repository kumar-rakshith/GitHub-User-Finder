
import React from 'react';

const SearchPopup = ({
  username,
  setUsername,
  handleSearch,
  userList,
  isLoading,
  handleUserSelect,
  closePopup,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search for a user"
            className="w-full p-3 rounded-md border border-gray-300 mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button 
            onClick={handleSearch} 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md ml-2"
          >
            Search
          </button>
        </div>
        
        <div className="mt-4 space-y-2">
          {isLoading && <div>Loading...</div>}
          {userList.length > 0 && !isLoading ? (
            userList.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-md"
              >
                <div className="flex items-center">
                  <img
                    src={user.avatar_url}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <p>{user.login}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleUserSelect(user.login)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No users found</div>
          )}
        </div>

        <button
          onClick={closePopup}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
