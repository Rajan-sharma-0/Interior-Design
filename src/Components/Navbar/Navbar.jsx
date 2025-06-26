import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode library
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [credits, setCredits] = useState(0);
  const navigate = useNavigate();
  const REACT_APP_API = process.env.REACT_APP_API;

  useEffect(() => {
    const userInfo = localStorage.getItem('user-info');
    const token = localStorage.getItem('token');

    setIsLoggedIn(!!userInfo);

    // Check if the token is expired
    const checkTokenExpiration = () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds
        return decodedToken.exp > currentTime; // Return true if token is valid
      }
      return false;
    };

    if (!checkTokenExpiration()) {
      logOut(); // Log out if the token is expired
      return; // Exit early if the token is expired
    }

    async function fetchCredits() {
      try {
        let response;
        if (isLoggedIn && token) {
          response = await fetch(`${REACT_APP_API}/payment/usercredits/me/`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
        }

        const data = await response.json();
        if (isLoggedIn) {
          setCredits(data.credits);
          localStorage.setItem('user-credits', JSON.stringify(data.credits)); // Storing credits in local storage
        }
      } catch (error) {
        console.error('Error fetching credits:', error);
      }
    }

    fetchCredits();
  }, [isLoggedIn, navigate]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {    
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const logOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      {/* Logo Section */}
      <a href="/" className="Logo">
        <img src="image/qubitnets_logo.png" alt="logo" className="logoimage" />
      </a>

      {/* Main Menu - hidden in mobile view unless toggled */}
      <div className={`menu1 ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <ul className="menu">
          <NavLink to="/" onClick={closeMobileMenu}><li>Home</li></NavLink>
          <NavLink to="/products" onClick={closeMobileMenu}><li>Product</li></NavLink>
          <NavLink to="/credits" onClick={closeMobileMenu}><li>Pricing</li></NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}><li>About</li></NavLink>
        </ul>
      </div>

      {/* User Section - Login or Profile Dropdown */}
      <div className="login1">
        <NavLink className="console" to="/consolebtn" onClick={closeMobileMenu}>Console</NavLink>
        <div className='credit_button'> <div className='credit_p'>Credits:</div> <div>{credits}</div> <img src="image/dollar.png" alt="coin" /> </div>
        {isLoggedIn ? (
          <div className="user-container">
            <div className="user-img" onClick={toggleDropdown}>
              <img src="image/user.png" alt="User " />
            </div>
            {dropdownOpen && (
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <NavLink to="user-Info" onClick={closeMobileMenu}>User  Profile</NavLink>
                <button className='logout_btn' onClick={() => { logOut(); closeMobileMenu(); }}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <NavLink className='login' to="/login" onClick={closeMobileMenu}>Login</NavLink>
        )}
      </div>
      {/* Mobile Menu Toggle Button */}
     <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </div>

     
    </nav>
  );
}

export default Navbar;