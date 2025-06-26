import React, { useState } from "react"; // Importing React and useState hook
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import "./Sidebar.css"; // Importing CSS for styling the sidebar
import { Menu } from "lucide-react"; // Importing Menu icon for hamburger

// Sidebar functional component
const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("btn-1"); // State to track the currently active button
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility
  const navigate = useNavigate(); // Hook to access navigation functions

  // Function to handle button clicks
  const handleButtonClick = (buttonId, path) => {
    setActiveButton(buttonId); // Set the clicked button as active
    navigate(path); // Navigate to the specified path
    setIsOpen(false); // Close the sidebar after clicking
  };

  

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  return (
    <>
    <div className="mai-n_container">
       <button
        className="menu-btn flex items-center text-gray-700 hover:text-gray-900"
        onClick={toggleSidebar}
      >
        <Menu className="w-10 h-10" />
      </button>
      {/* Sidebar toggle button */}
      
      <aside className={`side-bar1 ${isOpen ? "open" : ""}`}> {/* Sidebar container */}
      
<div className="mt-20"> {/* Container for buttons */} 
        {/* Button for editing profile */}
        <button
          className={`button-${activeButton === "btn-1" ? " active" : ""}`} // Dynamically setting class based on active state
          id="btn-1" // Button ID
          onClick={() => handleButtonClick("btn-1", "/user-Info")} // Handle click with specific ID and path
        >
          <img src="image/edit.svg" alt="Edit Profile" id="img1" /> {/* Icon for edit profile */}
          Edit Profile {/* Button text */}
        </button>

        {/* Button for notifications */}
        <button
          className={`button-${activeButton === "btn-2" ? " active" : ""}`} // Dynamic class based on active state
          id="btn-2" // Button ID
          onClick={() => handleButtonClick("btn-2", "/notifications")} // Handle click
        >
          <img src="image/notification.svg" alt="Notifications" id="img2" /> {/* Icon for notifications */}
          Notifications {/* Button text */}
        </button>

        {/* Button for choosing plan */}
        <button
          className={`button-${activeButton === "btn-3" ? " active" : ""}`} // Dynamic class
          id="btn-3" // Button ID
          onClick={() => handleButtonClick("btn-3", "/credits")} // Handle click
        >
          <img src="image/plan.svg" alt="Choose Plan" id="img3" /> {/* Icon for choose plan */}
          Choose Plan {/* Button text */}
        </button>

        {/* Button for password & security */}
        <button
          className={`button-${activeButton === "btn-4" ? " active" : ""}`} // Dynamic class
          id="btn-4" // Button ID
          onClick={() => handleButtonClick("btn-4", "/security")} // Handle click
        >
          <img src="image/security.svg" alt="Password & Security" id="img4" /> {/* Icon for password & security */}
          Password & Security {/* Button text */}
        </button>

        {/* Button for order history */}
        <button
          className={`button-${activeButton === "btn-5" ? " active" : ""}`}
          id="btn-5"
          onClick={() => handleButtonClick("btn-5", "/credits-history")}
        >
          <img src="image/security.svg" alt="Order History" id="img5" />
          Order History
        </button>
        </div>
      </aside>

      {/* Click overlay to close sidebar */}
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}
    </div>
    </>
  );
};

export default Sidebar; // Exporting Sidebar component for use in other files
