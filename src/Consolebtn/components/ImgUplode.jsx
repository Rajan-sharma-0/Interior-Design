import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';

const ImgUplode = ({ onImageChange, responseImage }) => {
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (responseImage) {
            setImagePreview(responseImage);
        }
    }, [responseImage]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            onImageChange(file);
        }
    };

    const handleRemoveImage = () => {
        setImagePreview('');
        onImageChange(null);
    };

    return (
        <div className="w-full min-h-screen p-4 md:p-8">
            <div className="flex justify-center items-center rounded-lg bg-transparent w-full h-[400px] md:h-[600px] max-h-[600px]" style={{ backgroundImage: 'url(/image/white-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {!imagePreview && (
                    <label htmlFor="fileInput" className="cursor-pointer flex flex-col p-6 rounded-lg transition">
                        <div className="flex flex-col items-center justify-center mt-[3rem]">
                            <span className="text-lg md:text-xl">Upload your Image <span className="text-red-500 ml-2 text-lg md:text-xl">(Required)</span></span>
                            <p className="mb-[5px] mt-2 text-xs text-black">Upload furnished or empty space, sketches, or 3D models. Supports JPG and PNG formats.</p>
                        </div>
                        <img
                            src="/image/drag-drop.svg"
                            alt="Upload"
                            className="w-24 h-24 md:w-40 md:h-40 lg:w-[300px] lg:h-64 mx-auto "
                        />
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                )}
                {imagePreview && (
                    <div className="relative w-full h-full">
                        <button
                            onClick={handleRemoveImage}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700"
                        >
                            ✕
                        </button>
                        {/* <h3 className="text-lg font-bold text-center mb-3">Image Preview:</h3> */}
                        <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full rounded-lg max-h-[76vh] object-contain" 
                        />
                        
                        {/* Download Button */}
                        <div className="flex justify-center mt-4">
                            <DownloadButton imageUrl={imagePreview} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImgUplode;