import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar2 from '../../Components/Navbar/Navbar2';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const REACT_APP_API_URL = process.env.REACT_APP_API_BASE_URL;


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${REACT_APP_API_URL}/password/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`A password reset link has been sent to ${email}`);
        setShowAlert(true); // Show alert modal
        localStorage.setItem('reset-token', result.token); // Store token
      } else {
        setMessage(result.message || 'Failed to send reset link');
      }
    } catch (error) {
      setMessage('Error occurred while sending reset link');
    } finally {
      setIsSubmitting(false);
      setEmail(''); // Clear email field after submission
    }
  };

  return (
    <>
    <Navbar2/>
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(/image/bg1.webp)` }} // Adding background image
    >
      {/* Form Container */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-700">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-4">
          Enter your email below, and we'll send you instructions to reset your password.
        </p>

        {/* Form for password reset */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#989a6f]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {message && <p className="text-center text-gray-600 text-sm">{message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#989a6f] rounded-md hover:bg-[#7f8058] transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {/* Link back to Login page */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Remembered your password?{' '}
          <Link to="/login" className="text-[#989a6f] font-semibold hover:text-[#7f8058]">
            Log In
          </Link>
        </p>
      </motion.div>

      {/* Full-Screen Alert Modal */}
      {/* <AnimatePresence>
        {showAlert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Check your email</h2>
              <p className="text-gray-600 mb-6">A password reset link has been sent to your email.</p>
              <button
                onClick={() => setShowAlert(false)}
                className="bg-[#989a6f] text-white py-2 px-4 rounded-md hover:bg-[#7f8058] transition duration-300"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
    </>
  );
}

export default ResetPassword;
