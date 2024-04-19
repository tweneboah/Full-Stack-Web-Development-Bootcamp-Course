import React from "react";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        User Profile
      </h2>

      <form className="space-y-6">
        {/* User Name Field */}
        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-3xl text-gray-400" />
          <div className="flex-1">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your username"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-3xl text-gray-400" />
          <div className="flex-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex items-center space-x-4">
          <FaLock className="text-3xl text-gray-400" />
          <div className="flex-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="New password"
            />
            <p className="mt-1 text-xs text-gray-500">
              Leave blank to keep the current password.
            </p>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
