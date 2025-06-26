import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Navbar2 from '../../Components/Navbar/Navbar2';

function PasswordReset() {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    lowercase: false,
    uppercase: false,
    digit: false,
    specialChar: false,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true); // For confirming password match

  const navigate = useNavigate();

  // Extract the token from the URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (!token) {
          setMessage('Token is missing or invalid.');
        } else {
          localStorage.setItem('reset-token', token);
        }
      } catch (error) {
        console.error("Error validating token:", error);
        setMessage('An error occurred while validating the token.');
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, [token]);

  // Check password rules in real-time
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check password rules
    setPasswordRules({
      minLength: newPassword.length >= 8,
      lowercase: /[a-z]/.test(newPassword),
      uppercase: /[A-Z]/.test(newPassword),
      digit: /\d/.test(newPassword),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    });

    // Also check if passwords match when the password is changed
    setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Check if passwords match in real-time
    setPasswordsMatch(password === newConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Check if all password rules are fulfilled
    const isPasswordValid =
      passwordRules.minLength &&
      passwordRules.lowercase &&
      passwordRules.uppercase &&
      passwordRules.digit &&
      passwordRules.specialChar;

    if (!isPasswordValid) {
      setMessage('Password does not meet the required rules.');
      return;
    }

    if (!passwordsMatch) {
      setMessage('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/password/reset/confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send token in the Authorization header
        },
        body: JSON.stringify({
          token: token,           // The token
          new_password1: password, // The new password
          new_password2: confirmPassword, // The confirmation password
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Password has been reset successfully.');
        localStorage.removeItem('reset-token');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setMessage(result.message || 'Failed to reset password.');
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-cover bg-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
    <Navbar2/>
    <div
    
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/image/bg1.webp)` }} // Applying background image
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-700">Reset Password</h2>
        
        {message && (
          <p className={`text-center mb-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            name="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />

          <button
            type="submit"
            className="w-full py-2 text-white bg-[#989a6f] rounded-md hover:bg-[#7f8058] transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Resetting...' : 'Reset Password'}
          </button>
          
          {/* Real-time password rules feedback displayed after Confirm Password */}
          <div className="mt-4 text-sm">
            <p className={passwordRules.minLength ? "text-green-600" : "text-red-600"}>
              {passwordRules.minLength ? '✔' : '✘'} At least 8 characters
            </p>
            <p className={passwordRules.lowercase ? "text-green-600" : "text-red-600"}>
              {passwordRules.lowercase ? '✔' : '✘'} Contains lowercase letter
            </p>
            <p className={passwordRules.uppercase ? "text-green-600" : "text-red-600"}>
              {passwordRules.uppercase ? '✔' : '✘'} Contains uppercase letter
            </p>
            <p className={passwordRules.digit ? "text-green-600" : "text-red-600"}>
              {passwordRules.digit ? '✔' : '✘'} Contains a number
            </p>
            <p className={passwordRules.specialChar ? "text-green-600" : "text-red-600"}>
              {passwordRules.specialChar ? '✔' : '✘'} Contains special character
            </p>
            {/* Check if passwords match */}
            <p className={passwordsMatch ? "text-green-600" : "text-red-600"}>
              {passwordsMatch ? '✔' : '✘'} Passwords match
            </p>
          </div>
        </form>

        {/* Password requirements displayed below the submit button */}
        {/* <div className="mt-4 text-gray-600 text-sm">
          <p>Requirements:</p>
          <ul className="list-disc list-inside">
            <li>At least one lowercase letter</li>
            <li>At least one uppercase letter</li>
            <li>At least one digit</li>
            <li>At least one special character</li>
            <li>Minimum 8 characters in length</li>
          </ul>
        </div> */}
      </div>
    </div>
    </>
  );
}

export default PasswordReset;
