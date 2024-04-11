import React from "react";

const UserProfile = () => {
  const user = {
    username: "JaneDoe",
    email: "jane.doe@example.com",
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-8 bg-gray-100 text-center">
        <div className="mb-4">
          <img
            className="rounded-full h-24 w-24 mx-auto border-2 border-gray-300"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {user.username}
        </h2>
        <p className="text-gray-700">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
