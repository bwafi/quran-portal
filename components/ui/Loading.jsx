import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen p-5 bg-gray-100 dark:bg-bg-dark min-w-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <div className="w-3 h-3 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
