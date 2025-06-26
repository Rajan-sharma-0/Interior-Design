import React from 'react';

const DesignItem = ({ uploadedImage, onRemove }) => {
  return (
    <div className="design-item">
      <img src={uploadedImage} alt="Uploaded Room" />
      <button className="remove-icon" onClick={onRemove}>
        ×
      </button>
    </div>
  );
};

export default DesignItem;
