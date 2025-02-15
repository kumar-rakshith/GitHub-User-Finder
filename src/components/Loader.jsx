import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      <p className="text-lg text-white ml-4">Loading...</p>
    </div>
  );
};

export default Loader;
