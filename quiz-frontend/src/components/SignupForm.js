import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './Signup.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!name || !code) {
      setError('Please provide both name and code');
      toast.error('Please provide both name and code');
      return;
    }

    try {
      // Make API call to submit the form using the base URL from the environment variable
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/signup`,
        { name, code }
      );

      // If signup is successful, navigate to the quiz page
      if (response.status === 201) {
        toast.success('Signup successful! Redirecting to the quiz...');
        setTimeout(() => navigate('/questions'), 1500);
      } else {
        setError('Invalid code or error during signup');
        toast.error('Invalid code or error during signup');
      }
    } catch (err) {
      setError('Error during signup. Please try again.');
      toast.error('Signup failed. Please try again.');
      console.error('Signup failed:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <Toaster />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Signup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-500 hover:to-green-400 transition-transform transform hover:scale-105"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
