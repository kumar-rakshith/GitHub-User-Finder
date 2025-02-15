import React from 'react';

const UserDetail = ({ selectedUser, reposData, isDarkMode }) => {
  return (
    <div className={`w-full sm:w-auto lg:mx-24 sm:mx-8 p-8 rounded-xl shadow-xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col sm:flex-row items-center mb-8 lg:w-full sm:w-60">
        <img
          src={selectedUser.avatar_url}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-4 sm:mb-0 sm:mr-6"
        />
        <div className='w-full sm:w-60'>
          <h2 className="text-3xl font-semibold">{selectedUser.name}</h2>
          <p className="text-lg text-gray-400">{selectedUser.bio || 'No bio available'}</p>
          <div className="mt-2 text-gray-500 text-lg">
            <span>{selectedUser.followers} Followers</span>
          </div>
        </div>
      </div>

      <div className="space-y-6 w-full">
        <h3 className="text-2xl font-semibold">
          {reposData.length ? 'Top 5 Repositories' : 'No Repositories Found'}
        </h3>
        {reposData.length === 0 ? (
          <p className="text-lg text-gray-500">No repositories found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reposData.map((repo) => (
              <div
                key={repo.id}
                className={`bg-gray-50 p-5 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-100 transition duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'}`}
              >
                <div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'} text-xl font-semibold`}
                  >
                    {repo.name}
                  </a>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-500'} text-sm text-justify w-[90%]`}>
                    {repo.description || 'No description'}
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500 hover:text-indigo-500 transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="font-semibold">{repo.stargazers_count}</span>
                  <span className="text-gray-400">Stars</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
