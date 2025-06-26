// src/pages/AboutPage.jsx
import React from "react";
import { FaUsers, FaTasks, FaLock, FaLaptopCode } from 'react-icons/fa';

const AboutPage = () => {
    return (
    <div className="px-6 md:px-16 py-10 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
        <p className="text-lg">
          Welcome to <span className="font-semibold text-secondary">Freelance Task Marketplace</span> — your trusted platform
          for connecting clients with skilled freelancers. Whether you're posting tasks or seeking work, we simplify freelance collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        <div className="bg-base-200 rounded-2xl p-6 shadow-lg">
          <FaTasks className="text-3xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Task Posting</h3>
          <p>Post tasks with clear deadlines, categories, and budgets. Let the right freelancers come to you.</p>
        </div>

        <div className="bg-base-200 rounded-2xl p-6 shadow-lg">
          <FaUsers className="text-3xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Freelancer Bidding</h3>
          <p>Freelancers can bid on tasks in real-time, giving clients flexibility and choice.</p>
        </div>

        <div className="bg-base-200 rounded-2xl p-6 shadow-lg">
          <FaLock className="text-3xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
          <p>We use Firebase Auth and environment variables to keep your information safe and private.</p>
        </div>

        <div className="bg-base-200 rounded-2xl p-6 shadow-lg">
          <FaLaptopCode className="text-3xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Modern Tech Stack</h3>
          <p>Built using React, Node.js, MongoDB, and Firebase — with responsive UI for all devices.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
