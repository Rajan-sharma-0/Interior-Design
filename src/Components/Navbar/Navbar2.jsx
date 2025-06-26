import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('user-info');
    setIsLoggedIn(!!userInfo);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const logOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleBackButton = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <nav className="bg-[#333] h-20 text-white flex justify-between items-center p-4 fixed w-full z-10 shadow-lg">
      {/* Logo Section */}
      <a href="/" className="flex items-center">
        <img src="image/qubitnets_logo.png" alt="logo" className="h-12" />
      </a>

      {/* Mobile Menu Toggle Button */}
      <button className="text-3xl md:hidden" onClick={toggleMobileMenu}>
        ☰
      </button>

      {/* Main Menu */}
      <div className={`md:flex ${mobileMenuOpen ? 'block' : 'hidden'} space-y-4 md:space-x-6 md:space-y-0 md:items-center md:justify-center w-full`}>
        <ul className="flex flex-col md:flex-row gap-10 ">
          <li><NavLink to="/" className="text-white hover:text-yellow-500 no-underline">Home</NavLink></li>
          <li><NavLink to="#" className="text-white hover:text-yellow-500 no-underline">About</NavLink></li>
          <li><NavLink to="#" className="text-white hover:text-yellow-500 no-underline">Blog</NavLink></li>
          <li><NavLink to="#" className="text-white hover:text-yellow-500 no-underline">Services</NavLink></li>
        </ul>

        {/* User Dropdown */}
        {isLoggedIn && (
          <div className="relative ml-5">
            <button onClick={toggleDropdown}>
              <img src="image/user.png" alt="User" className="h-10 w-10 rounded-full border-2 border-white" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-700 shadow-lg rounded-md">
                <NavLink to="/user-info" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline">User Profile</NavLink>
                <button onClick={logOut} className="w-full text-left px-4 py-2 text-white hover:bg-gray-600">Logout</button>
              </div>
            )}
          </div>
        )}

       
      </div>
    </nav>
  );
}

export default Navbar2;
