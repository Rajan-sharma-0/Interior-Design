import React, { useState } from 'react';
// import './Sign.css'; // Importing CSS file for styling
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate for routing
import { useAuth0 } from "@auth0/auth0-react";
import Footer from '../Components/Footer/Footer';

import { useGoogleLogin } from '@react-oauth/google';

function Sign() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const REACT_APP_API_URL = process.env.REACT_APP_API_BASE_URL;
  const [message, setMessage] = useState('');
  const { loginWithRedirect } = useAuth0();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };






  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    const userData = { name, email, password };
    setIsSubmitting(true);

    try {
      const signupResponse = await fetch(`${REACT_APP_API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": 'application/json'
        },
        body: JSON.stringify(userData),
      });

      const signupResult = await signupResponse.json();

      if (signupResponse.ok) {
        localStorage.setItem("user-info", JSON.stringify(signupResult));

        const otpResponse = await fetch(`${REACT_APP_API_URL}/sendotp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json'
          },
          body: JSON.stringify({ email }),
        });

        const otpResult = await otpResponse.json();

        if (otpResponse.ok) {
          setMessage({ type: 'success', text: 'OTP sent! Redirecting to OTP verification...' });
          setTimeout(() => {
            navigate('/otpverpage', { state: { email } });
          }, 2000);
        } else {
          setMessage({ type: 'error', text: otpResult.message || 'Failed to send OTP' });
        }
      } else {
        setMessage({ type: 'error', text: signupResult.message || 'Sign up failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.error(error),
  });

  return (
    <>

      <div className=" flex flex-col md:flex-row h-screen w-full  ">

        <div className="flex-1 hidden md:block p-8 bg-gry-100 mt-[81px] relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('image/signimg.jpeg')" }}>
          <div className="text-section text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1>Side</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem
              sunt officiis amet, quibusdam repellat velit ad rerum nobis? Tenetur
              sapiente voluptatem ab suscipit magnam quisquam. Eaque quibusdam
              nam ratione.
            </p>
          </div>

          {/* <img src="image/signimg.jpeg" alt="Background" /> */}
        </div>

        <div className="flex-1 p-8 flex items-center justify-center bg-white">
          <div className="max-w-md w-full">
            <div className="title-section">
              <h3 className="text-3xl font-semibold mb-4">Sign Up</h3>
              <p className="text-lg mb-6">Create your account. It's free and only takes a minute.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-section mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mb-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mb-3"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mb-3"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              {message && (
                <p className={message.type === 'error' ? 'text-red-500' : 'text-green-500'}>
                  {message.text}
                </p>
              )}

              <div className="buttons mt-6">
                <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
                <Link className="block text-center text-blue-500 mt-4" to="/login">Already have an account? Login</Link>
              </div>

              <div className="or-divider mt-6">
                <div className="divider-line"></div>
              </div>

              <button
                // onClick={() => googleLogin()}
                className="w-full py-2 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 flex items-center justify-center space-x-2 transition duration-300" >
                <img
                  src="image/R.png"
                  alt="Google Icon"
                  className="h-5 w-5"
                />
                <span>Continue with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Sign;
