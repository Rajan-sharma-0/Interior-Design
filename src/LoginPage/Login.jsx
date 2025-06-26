// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';  // Importing React Router's Link and useNavigate for navigation
// import "./Login.css";  // Importing the CSS file for styling the Login component
// import Footer from "../Components/Footer/Footer";  // Importing the Footer component

// const Login = () => {
//     const [email, setEmail] = useState("");  // State to manage the email input field
//     const [password, setPassword] = useState("");  // State to manage the password input field
//     const [error, setError] = useState("");  // State to manage error messages
//     const [loading, setLoading] = useState(false);  // State to manage loading state during login
//     const navigate = useNavigate();  // Hook to navigate between routes

//     // Function to handle successful login and save data to local storage
//     const handleLogin = (userData, userInitial) => {
//         console.log("user logged in:", userData);
//         localStorage.setItem('user-info', JSON.stringify(userData));  // Save user data in local storage
//         localStorage.setItem('user-initial', userInitial);  // Save user's initial in local storage
//         localStorage.setItem('token', userData.token);  // Save token in local storage

//         navigate("/");  // Redirect to the home page
//         window.location.reload();  // Reload the page to update the Navbar (assuming Navbar reacts to the login state)
//     };

//     // Function to handle the login form submission
//     const login = async (e) => {
//         e.preventDefault();  // Prevent page reload on form submit
//         setError("");  // Clear any previous errors

//         // Basic validation to check if fields are filled
//         if (email.trim() === "" || password.trim() === "") {
//             setError("Please fill in all fields.");
//             return;
//         }

//         setLoading(true);  // Show loading indicator

//         try {
//             // Sending a POST request to the login API
//             const response = await fetch('http://34.68.134.39:8000/interiorai/api/v1/public/signin', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Accept": 'application/json'
//                 },
//                 body: JSON.stringify({ email, password }),  // Send email and password in the body
//             });

//             const data = await response.json();  // Parse the response JSON

//             if (response.ok) {  // If the response is successful
//                 console.log('Success:', data);
//                 handleLogin(data);  // Handle successful login
//             } else {  // If login fails, show the error message
//                 setError(data.message || "Login failed. Please try again.");
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setError("An error occurred. Please try again.");  // Handle network or server error
//         } finally {
//             setLoading(false);  // Hide loading indicator
//         }
//     };

//     return (
//         <div className="lcontainer">
//             {/* Left side of the login page */}
//             <div className='left-side'>
//                 <div className="text-section">
//                     <h1>Welcome</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem sunt officiis amet, quibusdam repellat velit ad rerum nobis? Tenetur sapiente voluptatem ab suscipit magnam quisquam. Eaque quibusdam nam ratione.</p>
//                 </div>
//                 <img src="image/signimg.jpeg" alt="Background" />  {/* Background image */}
//             </div>

//             {/* Right side with the login form */}
//             <div className="right-side">
//                 <div className="login-section">
//                     {/* Title and welcome message */}
//                     <div className="title-section">
//                         <h3>Login</h3>
//                         <p>Welcome Back! Please enter your details</p>
//                     </div>
                    
//                     {/* Display error message if there's an error */}
//                     {error && <div className="error-message">{error}</div>}
                    
//                     {/* Login form */}
//                     <form onSubmit={login}>
//                         <div className="input-section">
//                             <input 
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}  // Update email state
//                                 placeholder='Enter Email' 
//                                 required
//                             />
//                             <input 
//                                 type="password" 
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}  // Update password state
//                                 placeholder='Password' 
//                                 required
//                             />
//                         </div>
                        
//                         {/* Checkbox and "Forgot Password" */}
//                         <div className="checkbox-section">
//                             <input type="checkbox" />
//                             <div className="forget">
//                                 <p className="checkbox-label">Remember Me</p>
//                                 <p className="forgot-password"><Link to='/resectp'>Forgot Password</Link></p>
//                             </div>
//                         </div>

//                         {/* Buttons for login and sign up */}
//                         <div className="buttons">
//                             <button type="submit" className='login-btn' disabled={loading}>
//                                 {loading ? "Logging in..." : "Login"}  {/* Show loading state */}
//                             </button>
//                             <Link className='signup-btn' to="/sign">Sign Up</Link>
//                         </div>
//                     </form>

//                     {/* Divider for alternative login options */}
//                     <div className="or-divider">
//                         <div className="divider-line"></div>
//                     </div>

//                     {/* Social sign-in (placeholder for Google sign-in) */}
//                     <div className="social-signin">
//                         <img src="image/R.png" alt="Google" />
//                         Sign In With Google
//                     </div>
//                 </div>

//                 {/* Prompt to sign up if the user doesn't have an account */}
//                 <div className="signup-prompt">
//                     <p>Don't have an account? <span className="signup-link"><Link to="/sign">Sign up for free</Link></span></p>
//                 </div>
//             </div>
            
//         </div>
        
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Login.css';
import Footer from '../Components/Footer/Footer';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const REACT_APP_API = process.env.REACT_APP_API;
  const GOOGLE_OAUTH2_CLIENT_ID = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
  const GOOGLE_OAUTH2_CLIENT_SECRET = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_SECRET;
  const APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  // Utility function to log user info
  const logUserInfo = (source, userInfo) => {
    // console.log([${source}] User Info:, userInfo); // Log user info
  };

  // Google login with token generation
  const googleLogin = useGoogleLogin({ // Google login hook
    flow: 'auth-code',                  // Flow type
    onSuccess: async (codeResponse) => {  // Success callback
      try {
        // Exchange authorization code for tokens
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {  // Token exchange endpoint (sand the client ID and secret)
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',   // Set the content type (URL encoded form data)
          },
          body: new URLSearchParams({
            code: codeResponse.code,
            client_id: `${GOOGLE_OAUTH2_CLIENT_ID}`,
            client_secret: `${GOOGLE_OAUTH2_CLIENT_SECRET}`,
            redirect_uri: `${APP_REDIRECT_URI}`,
            grant_type: 'authorization_code',
          }),  // Set the request body  (code, client ID, secret, redirect URI, and grant type) sand to the token endpoint
        });

      const tokenData = await tokenResponse.json();
      const { access_token, id_token } = tokenData;

      const userInfo = jwtDecode(id_token);
      logUserInfo('Google Login', userInfo);

      const backendResponse = await fetch(
        `${REACT_APP_API}/googleauth/google-login/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ access_token }),
        }
      );

        const backendData = await backendResponse.json();
        console.log('Backend Response:', backendData.access_token);

        if (backendResponse.ok) {
          // Save user info and token to localStorage
          // localStorage.setItem('user-info', JSON.stringify(userInfo)); // Save user info to local storage
          localStorage.setItem('token', backendData.access_token);          // Save access token to local storage
          localStorage.setItem('user-info', JSON.stringify(backendData)); // Save backend data to local storage

          // Redirect to home page
          navigate('/');
          window.location.reload();
        } else {
          setError(backendData.message || 'Google login failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during Google login:', error);
        setError('Google login failed. Please try again.');
      }
    },
    onError: (error) => {
      console.error('Google login failed:', error);
      setError('Google login failed. Please try again.');
    },
  });

  // Handle Manual Login
  
  const login = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${REACT_APP_API}/public/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      logUserInfo('Manual Login', data);

      if (response.ok) {
        localStorage.setItem('user-info', JSON.stringify(data));
        localStorage.setItem('token', data.token);
        navigate('/');
        window.location.reload();
      } else {
        // Extract error message correctly
        const errorMessage =
          data.non_field_errors?.[0] || // Get first non-field error
          data.message || 
          data.error || 
          data.detail || 
          'Login failed. Please try again.';

        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
      <div className="flex flex-col md:flex-row h-screen w-full ">
        <div className="flex-1 hidden md:block p-8 bg-gry-100 mt-[81px] relative bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: "url('image/signimg.jpeg')" }}>
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

        <div className="flex-1 p-8 flex items-center justify-center bg-white ">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <h3 className='text-2xl font-semibold'>Login</h3>
              <p>Welcome Back! Please enter your details</p>
            </div>

            {error && (
              <div className="p-2 mb-4 text-red-600 border border-red-500 rounded bg-red-100">
                {error}
              </div>
            )}

            <form onSubmit={login}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-200'
                />
              </div>
              <div className='mb-4'>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-200'
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <p className="text-sm">Remember Me</p>
                </div>
                <Link to="/resectp" className="text-sm text-blue-500">Forgot Password?</Link>
              </div>

              
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
              <div className="text-center">
                <Link to="/sign" className="text-sm text-blue-500">Don't have an account? Sign Up</Link>
              </div>
            </form>


            <div className="my-4 text-center">
              <div className="text-gray-500">or</div>
            </div>

            <button
              onClick={() => googleLogin()}
              className="w-full py-2 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 flex items-center justify-center space-x-2 transition duration-300" >
              <img
                src="image/R.png"
                alt="Google Icon"
                className="h-5 w-5"
              />
              <span>Continue with Google</span>
            </button>
          </div>
          
          
        </div>
       
      </div>
    </>
  );
};

export default Login;