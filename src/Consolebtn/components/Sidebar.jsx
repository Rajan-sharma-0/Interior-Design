import React, { useState, useRef, useEffect } from "react";
import RoomType from "./RoomType";
import '../FurnishedBtn/FurnishedBtn.css'; // Correct path for the CSS file
import '../Consolebtn.css';

const ImagesContainer = ({ setSelectedFile }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://34.136.74.236:8004/tiles/get-images");
        const data = await response.json();
        setImages(data.images.map((img) => img.image_base64) || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const dataURLtoFile = (dataUrl, filename) => {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const imageHandler = (image) => {
    setSelectedImage(image);

    // Convert Base64 to File
    const file = dataURLtoFile(image, 'selected-image.png');
    console.log(file);

    // Pass the file to Sidebar using prop function
    setSelectedFile(file);
  };

  const scrollLeft = () => {
    setVisibleIndex((prev) => Math.max(prev - 4, 0));
  };

  const scrollRight = () => {
    setVisibleIndex((prev) => Math.min(prev + 4, images.length - 4));
  };

  return (
    <div className="text-black bg-white p-2 sm:p-6 md:p-8 rounded-sm border border-gray-300 mb-4 sm:mb-6">
      <p className="font-bold text-lg sm:text-xl md:text-2xl">2. Wallpaper</p>
      <div className="px-2 border-gray-300 rounded-md border-2 flex justify-center items-center h-auto sm:h-96 md:h-[500px] mb-4 hover:scale-105 relative">
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Selected Wallpaper"
              className="h-full w-auto object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </>
        ) : (
          <img
            src="./image/no-image.svg"
            alt="No image selected"
            className="h-full w-full object-contain text-gray-400"
          />
        )}
      </div>

      <div className="relative flex items-center justify-center">
        <button
          className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-gray-700 text-2xl md:w-10 md:h-10"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div className="flex gap-2 w-full justify-center">
          {images.slice(visibleIndex, visibleIndex + 4).map((image, index) => (
            <div
              key={index}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden rounded-md cursor-pointer hover:scale-105 border border-black"
              onClick={() => imageHandler(image)}
            >
              <img
                src={image}
                alt={`Wallpaper ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-gray-700 text-2xl md:w-10 md:h-10"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};


const Sidebar = ({ handleGenerate, uploadedImage, setUploadedImage, showImages, images, roomType, setRoomType }) => {
  const [selectedFile, setSelectedFile] = useState(null); // Keep this for ImagesContainer

  const checkInputs = () => {
    return roomType !== "" && uploadedImage !== null;
  };

  return (
    <aside className="side-bar scrollbar-custom h-screen w-4/4 text-black flex flex-col p-2 overflow-y-auto">
      <nav>
        <div className="p-2 pb-2 flex justify-between items-center">
          <img src="image/qubitnets_logo.png" alt="logo" className="w-32" />
        </div>
      </nav>

      <RoomType roomType={roomType} setRoomType={setRoomType} />

      {showImages && images && images.length > 0 && (
        <ImagesContainer setSelectedFile={setSelectedFile} />
      )}

      <button
        id="generate-btn"
        className={`bg-blue-500 text-white border-none w-full flex items-center justify-center px-2 py-2 rounded-lg cursor-pointer 
         disabled:bg-gray-400 disabled:cursor-not-allowed ${checkInputs() ? "" : "opacity-90"}`}
        onClick={handleGenerate}
        disabled={!checkInputs()}
      >
        Generate
      </button>

      {selectedFile && (
        <div className="text-xs mt-2">
          <strong>Selected File:</strong> {selectedFile.name}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
