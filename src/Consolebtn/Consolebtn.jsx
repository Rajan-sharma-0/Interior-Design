import React, { useState } from "react";
import "./Consolebtn.css";
import NavbarLeft from "./components/NavbarLeft";
import Room1 from "./components/Room1";
import ImageUplode from "./components/ImgUplode.jsx";
import ColourPalette from "./components/ColourPalette";

const API_URL = process.env.REACT_APP_API_URL;

function Consolebtn() {
  const [userId, setUserId] = useState("");
  const [colorName, setColorName] = useState('');
  const [textPrompt, setTextPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [responseImage, setResponseImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState("basic");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('color_name', colorName);
    formData.append('text_prompt', textPrompt);
    formData.append('image', image);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json, image/png',
        },
        mode: 'cors',
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setResponseImage(imageUrl);
        setImage(null);
      } else {
        setError(`Failed to change wall color: ${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarLeft />
      
      <div className="md:flex-row w-full grid grid-cols-1 md:grid-cols-4">
        
        <div className="side-bar scrollbar-custom w-full  text-black flex flex-col overflow-y-auto col-span-1">
          <div className="p-2 pb-2 flex justify-between items-center">
            <img src="image/qubitnets_logo.png" alt="logo" className="w-32"/>
          </div>
          <div className="flex mb-4">
            <button
              className={`w-1/2 p-2 text-center rounded-l-lg ${activeTab === "basic" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("basic")}
            >
              Basic
            </button>
            <button
              className={`w-1/2 p-2 text-center rounded-r-lg ${activeTab === "advanced" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("advanced")}
            >
              Advanced
            </button>
          </div>

          {activeTab === "basic" ? (
            <>
              <Room1 title="Room Type" display="Select Palette" opt1="1" opt2="2" opt3="3" opt4="4" opt5="5" value={userId} onChange={(e) => setUserId(e.target.value)} />
              <Room1 title="Room Style" display="Choose your room style color" opt1="Green" opt2="Blue" opt3="Red" opt4="Yellow" opt5="Purple" value={colorName} onChange={(e) => setColorName(e.target.value)} />
              <Room1 title="Choose Color Pallett" display="Select wall" opt1="Front Wall" opt2="Back Wall" opt3="Left Wall" opt4="Right Wall" opt5="Ceiling" value={textPrompt} onChange={(e) => setTextPrompt(e.target.value)} />
            </>
          ) : (
            <>
              <Room1 title="Room Type" display="Select Option" opt1="Option 1" opt2="Option 2" opt3="Option 3" value={userId} onChange={(e) => setUserId(e.target.value)} />
              <ColourPalette />
            </>
          )}

          {message && <div className="p-2 mb-4 text-center text-white bg-red-500 rounded-md">{message}</div>}

          <button
            className={`w-full p-2 mt-4 text-gray-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'} rounded-md`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Generate"}
          </button>
        </div>

        <div className="col-span-3">
          <ImageUplode onImageChange={setImage} responseImage={responseImage} />
          {error && <div className="p-2 text-center text-white bg-red-500 rounded-md">{error}</div>}
        </div>
          
      </div>
    </>
  );
}

export default Consolebtn;