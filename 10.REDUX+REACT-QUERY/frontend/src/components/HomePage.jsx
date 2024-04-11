import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white text-center py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">React, Redux, & React Query</h1>
        <p className="text-2xl mb-10 mx-auto max-w-4xl">
          Explore the power of React with Redux for state management and React
          Query for server state synchronization.
        </p>
        <Link to="/learn">
          <button className="bg-white text-purple-700 px-10 py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
            Begin Learning
          </button>
        </Link>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-bold mb-16">
            Explore Core Technologies
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {/* React */}
            <div className="text-center">
              <FaReact className="text-blue-600 mx-auto text-8xl mb-5" />
              <h3 className="text-2xl font-bold mb-2">React</h3>
              <p>Create dynamic UIs.</p>
            </div>
            {/* Redux */}
            <div className="text-center">
              <SiRedux className="text-purple-500 mx-auto text-8xl mb-5" />
              <h3 className="text-2xl font-bold mb-2">Redux</h3>
              <p>Manage global state.</p>
            </div>
            {/* React Query */}
            <div className="text-center">
              <SiReactquery className="text-teal-500 mx-auto text-8xl mb-5" />
              <h3 className="text-2xl font-bold mb-2">React Query</h3>
              <p>Sync server state.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
