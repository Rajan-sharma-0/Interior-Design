import { useState } from "react";

const ImageUploader = () => {
  const [text, setText] = useState("bedroom");
  const [image, setImage] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Select the first file
  };

  const handleSubmit = async () => {
    if (!image || !text) {
      alert("Please provide both text and image.");
      return;
    }

    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);

    try {
      const response = await fetch("http://34.59.5.13:8000/image_recommendation/recommend", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await response.json();
      setGeneratedImages(data.images); // Assuming API returns { images: [...] }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" className="border p-2" />
      <input type="file" onChange={handleImageChange} className="border p-2 ml-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 ml-2">Generate</button>

      <div className="mt-4">
        {generatedImages.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {generatedImages.map((img, index) => (
              <img key={index} src={img} alt={`Generated ${index}`} className="w-full h-auto" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
