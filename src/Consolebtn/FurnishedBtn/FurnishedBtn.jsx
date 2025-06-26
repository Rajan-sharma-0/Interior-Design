import React, { useState, useRef, useEffect } from "react";
import "../Consolebtn.css";
import "./FurnishedBtn.css";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import DownloadButton from '../components/DownloadButton';
import NavbarLeft from "../components/NavbarLeft";
import Sidebar from "../components/Sidebar";
import RoomType from "../components/RoomType";

const FurnishedBtn = () => {
  const [roomType, setRoomType] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    console.log("Current roomType in FurnishedBtn:", roomType); // Debug
  }, [roomType]);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        console.error("Selected file is not an image:", file.type);
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      console.log("New preview URL:", previewUrl); // Debug
      setUploadedImage({ file, preview: previewUrl });
    }
  };

  const handleGenerate = async () => {
    if (!uploadedImage?.file) {
      fileInputRef.current?.click();
      return;
    }
  
    if (!roomType) {
      alert("Please select a room type before generating.");
      return;
    }
  
    console.log("Room Type before API call:", roomType); // Debug
  
    try {
      const formData = new FormData();
      formData.append("image", uploadedImage.file);
      formData.append("text", roomType); // Adjust key if needed (e.g., "room_type")
  
      const response = await fetch("http://34.136.74.236:8004/image_recommendation/recommend", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const imageUrls = data.recommended_images?.map(imgObj => imgObj.image) || [];
      setImages(imageUrls);
      setShowGallery(!!imageUrls.length);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  const DesignArea = ({ uploadedImage, setUploadedImage }) => {
    // Only revoke URL when component unmounts, not on every state change
    useEffect(() => {
      return () => {
        if (uploadedImage?.preview && !uploadedImage.file) {
          // Only revoke if it's not a file-based URL (e.g., from gallery)
          URL.revokeObjectURL(uploadedImage.preview);
          console.log("Preview URL revoked on unmount");
        }
      };
    }, []); // Empty dependency array to run only on unmount

    const handleRemoveImage = () => {
      if (uploadedImage?.preview) {
        URL.revokeObjectURL(uploadedImage.preview);
      }
      setUploadedImage(null);
    };

    const checkInputs = () => !uploadedImage;

    return (
      <div className="design-area" id="design-area">
        {!uploadedImage ? (
          <div className="upload-card">
            <p className="upload-text">
              <span className="upload-label">Upload your Image</span>
              <span className="required-text">(Required)</span>
            </p>
            <p className="p1-">
              Upload furnished or empty space, sketches, or 3D models. Supports JPG and PNG formats.
            </p>
            <div className="file-upload">
              <input
                type="file"
                id="file"
                accept="image/*"
                className="file-input"
                onChange={handleFileSelect}
              />
              <label htmlFor="file" className="file-label">
                <img
                  src="/image/drag-drop.svg"
                  alt="Drag and drop"
                  width="300"
                  height="300"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className={`design-item ${uploadedImage ? "large" : ""}`}>
            {uploadedImage.preview ? (
              <img
                src={uploadedImage.preview}
                alt="Selected Image"
                className="w-full rounded-lg max-h-[76vh] object-contain"
              />
            ) : (
              <p className="text-red-500">Error: No image preview available</p>
            )}
            <DownloadButton imageUrl={uploadedImage.preview} />
            <button className="remove-icon" onClick={handleRemoveImage}>
              ×
            </button>
          </div>
        )}
        <div className="flex justify-center items-center">
          <button
            id="generate-btn"
            className={`bg-blue-500 text-white border-none w-auto text-center flex items-center 
              justify-center px-2 py-2 mt-2 rounded-lg cursor-pointer disabled:bg-gray-300 
              disabled:cursor-not-allowed ${!checkInputs() ? "hover:bg-blue-600" : "opacity-90"}`}
            onClick={handleGenerate}
            disabled={checkInputs()}
          >
            Generate
          </button>
        </div>
      </div>
    );
  };

  const ImageGallery = ({ images, setUploadedImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const navigation = (direction) => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? container.scrollLeft - (container.offsetWidth + 20)
          : container.scrollLeft + (container.offsetWidth + 20);
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    const handleImageClick = (imageUrl) => {
      setUploadedImage({ file: null, preview: imageUrl });
      setShowGallery(true);
    };

    return (
      <div className="gallery-wrapper">
        <div className="gallery-container">
          <div className="image-gallery" ref={scrollRef}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className={`gallery-image ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleImageClick(image)}
                style={{ height: "200px", objectFit: "cover" }}
                onError={(e) => console.error("Gallery image load error:", e)}
              />
            ))}
          </div>
        </div>
        <div className="button-container flex justify-between items-center">
          <BsFillArrowLeftCircleFill
            className="slide-arrow left-arrow"
            onClick={() => navigation("left")}
          />
          <BsFillArrowRightCircleFill
            className="slide-arrow right-arrow"
            onClick={() => navigation("right")}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="consolebtn">
      <header>
        <nav className="navbar-console">
          <NavbarLeft />
        </nav>
      </header>

      <div className="container-furnish-console">
      <Sidebar 
          handleGenerate={handleGenerate} 
          uploadedImage={uploadedImage} 
          setUploadedImage={setUploadedImage}
          roomType={roomType}
          setRoomType={setRoomType} // Critical line
        />
        <main className="main-content">
          <DesignArea uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
        </main>
      </div>

      {showGallery && <ImageGallery images={images} setUploadedImage={setUploadedImage} />}
    </div>
  );
};

export default FurnishedBtn;