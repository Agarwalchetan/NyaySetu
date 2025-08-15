import React from 'react';
import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <Info className="mx-auto h-12 w-12 text-indigo-600" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About NyaySetu
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Making legal assistance affordable, accessible & AI-driven
        </p>
      </div>
      {/* Placeholder for about content */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-600">About page content coming soon...</p>
      </div>
    </div>
  );
};

export default About;