import React from 'react';

const DownloadButton = ({ imageUrl }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'downloaded-image.png'; // Set the downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Download Image
        </button>
    );
};

export default DownloadButton;
