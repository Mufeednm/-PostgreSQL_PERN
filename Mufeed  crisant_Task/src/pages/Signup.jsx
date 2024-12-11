import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const nav = useNavigate();

  return (
    <div className="flex">
      {/* Left Section with Image */}
      <img
        className="w-1/2 h-screen rounded-r-xl object-cover"
        src="../public/Sign_in.jpeg"
        alt="Background"
      />

      {/* Right Section with Form */}
      <div className="flex flex-col justify-center items-center w-1/2 h-screen space-y-4">
        {/* Logo */}
        <img src="/Logo.png" alt="Logo" className="mb-4" />
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <p className="text-gray-500">Create your account to get started!</p>

        {/* Username Input */}
        <div className="w-full max-w-sm">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your username"
          />
        </div>

        {/* Email Input */}
        <div className="w-full max-w-sm">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="w-full max-w-sm">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>

        {/* Signup Button */}
        <div className="w-full max-w-sm">
          <button
            onClick={() => nav("/dashboard")}
            className="w-full p-2 bg-[#af7974] text-white rounded-md hover:bg-[#8e605d]"
          >
            Sign Up
          </button>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-500">Already have an account?</span>
            <a href="/" className="text-[#af7974] underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;