import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        // Redirect to Admin page after successful login
        nav('/Admin');
      }
    } catch (err) {
      setError('Invalid username or password');
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <img
        className="w-1/2 h-screen rounded-r-xl object-cover"
        src="../public/Sign_in.jpeg"
        alt="Background"
      />
      <div className="flex flex-col justify-center items-center w-1/2 h-screen space-y-4">
        <img src="/Logo.png" alt="Logo" className="mb-4" />
        <h2 className="text-2xl font-bold">Sign In</h2>
        <p className="text-gray-500">Welcome back! Please enter your details.</p>
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-full max-w-sm">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="w-full max-w-sm">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div className="w-full max-w-sm">
          <button
            onClick={handleSignin}
            className="w-full p-2 bg-[#af7974] text-white rounded-md hover:bg-[#8e605d]"
          >
            Sign In
          </button>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-500">Don't have an account?</span>
            <a href="/Signup" className="text-[#af7974] underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
