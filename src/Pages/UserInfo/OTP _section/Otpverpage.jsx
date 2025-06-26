import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Otpverpage() {
  // State to store OTP input as an array of 6 empty strings
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [message, setMessage] = useState(''); // State to store success/error messages
  const [resendLoading, setResendLoading] = useState(false); // State to handle resend button loading state
  const [resendTimer, setResendTimer] = useState(0); // Timer to handle OTP resend cooldown
  const location = useLocation(); // To access state passed via navigation
  const navigate = useNavigate(); // To navigate programmatically
  const { name, email } = location.state || {}; // Retrieve name and email from the location's state

  const inputsRef = useRef([]); // Refs to manage focus on OTP input fields
  const REACT_APP_API_URL = process.env.REACT_APP_API_BASE_URL;

  // useEffect to handle the countdown for resend timer
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer); // Clean up timer
  }, [resendTimer]);

  // Handle OTP input change and automatically focus on the next/previous field
  const handleChange = (e, index) => {
    const value = e.target.value;
    // Allow only numeric values in OTP inputs
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input field
      if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    } else if (value === '') {
      // Clear the input and focus on the previous field
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  // Handle OTP verification when user submits the OTP
  const handleVerifyOtp = async () => {
    const otpString = otp.join(''); // Convert OTP array into a string
    if (otpString.length !== 6) {
      setMessage({ type: 'error', text: 'Please enter a valid 6-digit OTP.' });
      return;
    }

    try {
      // Send OTP verification request to the server
      const response = await fetch(`${REACT_APP_API_URL}/verifyotp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, otp: otpString }), // Pass email and OTP for verification
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'OTP verified! Redirecting to login...' });
        // Redirect to login after successful OTP verification
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        // Show error message if verification fails
        setMessage({ type: 'error', text: result.message || 'OTP verification failed' });
      }
    } catch (error) {
      // Handle network error
      setMessage({ type: 'error', text: 'Network error' });
    }
  };

  // Handle resend OTP functionality
  const handleResendOtp = async () => {
    setResendLoading(true); // Start loading state
    try {
      // Request OTP resend from the server
      const response = await fetch(`${REACT_APP_API_URL}/sendotp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }), // Pass email to request OTP resend
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'OTP resent! Please check your email.' });
        setOtp(Array(6).fill('')); // Reset the OTP inputs
        setResendTimer(30); // Start a 30-second cooldown for OTP resend
      } else {
        // Handle failure to resend OTP
        setMessage({ type: 'error', text: result.message || 'Failed to resend OTP' });
      }
    } catch (error) {
      // Handle network error
      setMessage({ type: 'error', text: 'Network error' });
    } finally {
      setResendLoading(false); // End loading state
    }
  };

  // Redirect to signup if user entered wrong number/email
  const handleWrongNumberClick = () => {
    navigate('/sign'); // Navigate to sign-up page
  };

  return (
    <div className="flex h-screen">
      {/* Left side with background image */}
      <div className="w-1/2 relative">
        <img src="image/signimg.jpeg" alt="Background" className="absolute inset-0 object-cover w-full h-full" />
      </div>

      {/* Right side with OTP form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="p-6 rounded-lg max-w-sm mx-auto">
          {/* OTP header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2">Please enter the One-Time Password to verify your account</h3>
            <p className="text-base mb-4">A One-Time Password has been sent to {email}</p>
            {name && email && (
              <p className="text-base text-white mb-4">Name: {name} | Email: {email}</p>
            )}
          </div>

          {/* OTP input fields */}
          <div className="flex justify-center mb-4 space-x-2">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(e, index)}
                ref={(el) => (inputsRef.current[index] = el)} // Store reference for input fields
                className="w-12 h-12 text-center border-b-4 border-black text-xl 
                           focus:outline-none 
                           focus:border-b-4 focus:border-red-500
                           hover:border-b-4 hover:border-red-500 
                           transition-all duration-300"
                aria-label={`OTP input ${index + 1}`}
              />
            ))}
          </div>

          {/* Verify OTP button */}
          <button
            onClick={handleVerifyOtp}
            className="w-full border-[2px] bg-red-500 text-slate-100 py-3 px-4 rounded-lg font-semibold transition-colors duration-300 hover:bg-gray-800 hover:text-slate-300"
            disabled={otp.includes('')} // Disable if OTP is incomplete
            aria-label="Verify OTP"
          >
            Verify OTP
          </button>

          {/* Resend OTP button */}
          <button
            onClick={handleResendOtp}
            className="w-full mt-4 text-black hover:font-semibold duration-1000"
            disabled={resendLoading || resendTimer > 0} // Disable if loading or cooldown is active
            aria-label="Resend OTP"
          >
            {resendLoading ? 'Resending...' : resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend OTP'}
          </button>

          {/* Display success or error message */}
          {message && (
            <p className={`mt-4 text-lg font-medium ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {message.text}
            </p>
          )}

          {/* Link to go back to signup if wrong number/email */}
          <div className="mt-4 text-center">
            <button
              onClick={handleWrongNumberClick}
              className="text-sm text-blue-600 hover:underline"
              aria-label="Go back to sign-up"
            >
              Entered the wrong number? Go back to sign-up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otpverpage;
