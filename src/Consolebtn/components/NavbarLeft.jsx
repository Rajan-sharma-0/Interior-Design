import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();

  const handleEmptyRoomClick = () => navigate("/consolebtn");
  const handleBackButtonClick = () => navigate(-1);
  const handleHomeButtonClick = () => navigate("/");
  const handleFurnishedRoomClick = () => navigate("/FurnishedBtn");
  const handleRoom3 = () => navigate("/room3");
  const [colorPalette, setColorPalette] = useState("");
 const [setIsSidebarVisible, setIsSidebarCollapsed] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  const handleFileSelect = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setIsSidebarCollapsed(true); // Collapse the sidebar
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-between w-full  bg-[#333] p-3">
      {/* Left Side - Navigation Buttons */}
      <div className="flex space-x-3">
        <button
          className="flex items-center gap-1 px-3 py-2 text-white  rounded hover:bg-gray-400"
          onClick={handleBackButtonClick}
        >
          <img src="image/back.svg" alt="Back" className="w-5 h-5" />
          Back
        </button>

        <button
          className="flex items-center gap-1 px-3 py-2 text-white  rounded hover:bg-gray-400"
          onClick={handleHomeButtonClick}
        >
          <img src="image/home.svg" alt="Home" className="w-5 h-5" />
          Home
        </button>

        <button
          className="px-3 py-2 text-white  rounded hover:bg-gray-400"
          onClick={handleEmptyRoomClick}
        >
          Room 1
        </button>

        <button
          className="px-3 py-2 text-white rounded hover:bg-gray-400"
          onClick={handleFurnishedRoomClick}
        >
          Room 2
        </button>

        <button
          className="px-3 py-2 text-white  rounded hover:bg-gray-400"
          onClick={handleRoom3}
        >
          Room 3
        </button>
      </div>

      {/* Right Side - Add Other Files */}
      <div className="ml-auto">
        <input type="file" id="file-input" className="hidden" onChange={handleFileSelect} />
        <label
          htmlFor="file-input"
          className="px-4 py-2  text-white rounded cursor-pointer hover:bg-gray-400"
        >
          Add Other Files
        </label>
      </div>
    </div>
  );
};

export default NavbarLeft;
