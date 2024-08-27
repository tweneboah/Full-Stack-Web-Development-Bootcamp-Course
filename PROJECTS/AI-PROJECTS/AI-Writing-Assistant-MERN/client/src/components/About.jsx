import React from "react";
import { FaPencilAlt, FaMagic, FaRobot, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          About AI Writing Assistant
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <p className="text-xl text-gray-700 mb-6">
            AI Writing Assistant is a cutting-edge tool designed to elevate your
            writing experience. Powered by advanced artificial intelligence, our
            platform offers a suite of features to enhance your writing quality,
            boost your productivity, and unleash your creativity.
          </p>
          <p className="text-xl text-gray-700">
            Whether you're a student, professional writer, or anyone looking to
            improve their writing, our AI-driven tools are here to support you
            every step of the way.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            icon={<FaPencilAlt className="text-blue-500" />}
            title="Grammar Correction"
            description="Advanced AI algorithms detect and correct grammatical errors, ensuring your writing is polished and professional."
          />
          <FeatureCard
            icon={<FaMagic className="text-purple-500" />}
            title="Spell Check"
            description="Comprehensive spell-checking capability catches typos and suggests corrections, maintaining the integrity of your text."
          />
          <FeatureCard
            icon={<FaRobot className="text-green-500" />}
            title="AI-Powered Rephrasing"
            description="Intelligent rephrasing suggestions help you diversify your language and improve clarity and impact."
          />
          <FeatureCard
            icon={<FaChartLine className="text-red-500" />}
            title="Writing Analytics"
            description="Gain insights into your writing style and track improvements over time with our detailed analytics."
          />
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl mb-6">
            Join thousands of satisfied users who have elevated their writing
            with AI Writing Assistant.
          </p>
          <Link
            to="/write"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
