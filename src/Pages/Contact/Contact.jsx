// src/pages/ContactPage.jsx
import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  

    return (
    <div className="px-6 md:px-16 py-12  text-base-content min-h-[70vh]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-secondary" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-secondary" />
            <a href="mailto:support@freelancemarketplace.com" className="hover:underline">
              support@freelancemarketplace.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-secondary" />
            <span>+880 1234-567890</span>
          </div>
        </div>

        <form className="space-y-6 bg-base-200 p-6 rounded-xl shadow-lg">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Message</span>
            </label>
            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};


export default Contact;
