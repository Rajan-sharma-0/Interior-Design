import React,{useState} from 'react';

const UploadCard = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
          const imageUrl = URL.createObjectURL(file);
          setUploadedImage(imageUrl);
        } else {
          alert("Please upload a JPG or PNG file.");
        }
      };
      
  return (
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
          id="file-input"
          className="file-input"
          onChange={handleFileSelect}
        />
        <label htmlFor="file-input" className="file-label">
          <img
            src="image/drag-drop.svg"
            alt="Upload Icon"
            width={"300px"}
            height={"300px"}
          />
        </label>
      </div>
    </div>
  );
};

export default UploadCard;
