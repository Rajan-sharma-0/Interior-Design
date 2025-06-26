import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NavbarLeft from "./components/NavbarLeft";
import "./Consolebtn.css";
import Download from "./components/Download";
import yourImagesArray from "./Images";
import Generatebtn from "./components/Generatebtn";
import ImagesContainer from "./components/Sidebar";

const Room3 = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1080);
  const [selectedFile, setSelectedFile] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  useEffect(() => {
    console.log("Current roomType in Room3:", roomType);
  }, [roomType]);

  const checkInputs = () => {
    return roomType !== "" && uploadedImage !== null && selectedFile !== null;
  };

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        console.error("Selected file is not an image:", file.type);
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      console.log("New preview URL:", previewUrl);
      setUploadedImage({ file, preview: previewUrl });
    }
    setSelectedFile({
      file: file,
      preview: URL.createObjectURL(file) // Generate preview URL  
    });
    setGeneratedImage(URL.createObjectURL(file));
  };

  const handleGenerate = async () => {
    if (!uploadedImage?.file || !selectedFile?.file) {
      console.error('Both room and wallpaper images must be selected.');
      return;
  }
    const formData = new FormData();
    formData.append("room_image", uploadedImage.file);
    formData.append("wallpaper_image", selectedFile.file);

    try {
      const response = await fetch(
        // `put your url in this place`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );fff

      if (!response.ok) {
        console.error(`Failed to upload images: ${response.status} ${response.statusText}`);
        return;
      }

      const contentType = response.headers.get("content-type");
      console.log("Content Type:", contentType);

      if (contentType?.includes("image")) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        console.log("Generated Image URL:", imageUrl);

        if (imageUrl === uploadedImage.preview) {
          console.warn("Generated image looks the same as uploaded image.");
        }
        if (generatedImage) {
          URL.revokeObjectURL(generatedImage);
        }
        setGeneratedImage(imageUrl);
        console.log("Image successfully generated.");
      } else {
        console.error("Unexpected response format.");
      }
    } catch (error) {
      console.error("An error occurred while uploading images:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1080);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesignArea = ({ uploadedImage, setUploadedImage, generatedImage, setGeneratedImage }) => {
    useEffect(() => {
      return () => {
        if (uploadedImage?.preview && !uploadedImage.file) {
          URL.revokeObjectURL(uploadedImage.preview);
          console.log("Preview URL revoked on unmount");
        }
      };
    }, [uploadedImage]);

    const handleRemoveImage = () => {
      if (uploadedImage?.preview) {
        URL.revokeObjectURL(uploadedImage.preview);
      }
      setUploadedImage(null);
    };

    return (
      <div className="design-area" id="design-area">
        {!uploadedImage && !generatedImage && (
          <div className="upload-card">
            <p className="upload-text">
              <span className="upload-label">Upload your Room Image</span>
              <span className="required-text">(Required)</span>
            </p>
            <p className="p1-">
              Upload furnished or empty space, sketches, or 3D models. Supports JPG and PNG formats.
            </p>
            <div className="file-upload">
              <input
                type="file"
                id="file-input-room"
                accept="image/*"
                className="file-input"
                onChange={handleFileSelect}
              />
              <label htmlFor="file-input-room" className="file-label">
                <img
                  src="image/drag-drop.svg"
                  alt="Drag and Drop"
                  width="300px"
                  height="300px"
                />
              </label>
            </div>
           
          </div>
        )}

        {uploadedImage && !generatedImage && (
          <div className={`design-item ${uploadedImage ? "large" : ""}`}>
            {uploadedImage.preview ? (
              <img
                src={uploadedImage.preview}
                alt="Uploaded Room"
                className="w-full rounded-lg max-h-[76vh] object-contain"
              />
            ) : (
              <p className="text-red-500">Error: No image preview available</p>
            )}
            <Download />
            <button className="remove-icon" onClick={handleRemoveImage}>
              ×
            </button>
          </div>
        )}

        {generatedImage && (
          <div className="design-item">
            <img
              src={generatedImage}
              alt="Generated Wallpaper"
              style={{ maxWidth: "90%", height: "auto", display: "block" }}
            />
            <Download />
          </div>
        )}

        <div className="flex justify-center items-center">
          <Generatebtn
            isInputsValid={checkInputs()}
            className={isLargeScreen ? "generate-btn generate-btn-large" : "generate-btn generate-btn-small"}
            onClick={handleGenerate}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="consolebtn flex-wrap">
      <header>
        <nav className="navbar-console">
          <NavbarLeft />
        </nav>
      </header>

      <div className="container-console">
        <Sidebar
          className="side-bar"
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
          showImages={true}
          images={yourImagesArray}
          handleGenerate={handleGenerate}
          roomType={roomType}
          setRoomType={setRoomType}
        >
          <ImagesContainer setSelectedFile={setSelectedFile} />
        </Sidebar>
        <main className="main-content">
          <DesignArea
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
            generatedImage={generatedImage}
            setGeneratedImage={setGeneratedImage}
          />
        </main>
      </div>
    </div>
  );
};

export default Room3;