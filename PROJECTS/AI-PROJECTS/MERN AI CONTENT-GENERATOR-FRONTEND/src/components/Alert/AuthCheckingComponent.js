import React from "react";
import { FaSpinner } from "react-icons/fa";

const AuthCheckingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <FaSpinner className="animate-spin text-4xl text-blue-500" />
      <p className="mt-4 text-lg text-gray-200">
        Checking authentication status, please wait...
      </p>
    </div>
  );
};

export default AuthCheckingComponent;
