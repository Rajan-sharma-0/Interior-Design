import React from "react";

const DesignRoom = ({ setDesignOption }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-md shadow-md">
      <p className="text-lg font-semibold text-white">
        <span>4. Design Your Room</span>
        <span className="text-red-400 ml-2">(Required)</span>
      </p>
      <div className="mt-4 space-y-4">
        <label className="block text-white">
          <input
            type="radio"
            name="design-option"
            value="furniture"
            className="mr-2"
            onChange={(e) => setDesignOption(e.target.value)}
          />
          Fill in Furniture
        </label>
        <p className="text-sm text-gray-400">
          Upload your room and Spacely AI will automatically place furniture in
          your space.
        </p>
        <label className="block text-white">
          <input
            type="radio"
            name="design-option"
            value="furniture-style"
            className="mr-2"
            onChange={(e) => setDesignOption(e.target.value)}
          />
          Fill in Furniture and Style Your Room
        </label>
        <p className="text-sm text-gray-400">
          Upload your room and let Spacely AI furnish and style it to match your
          chosen style.
        </p>
      </div>
    </div>
  );
};

export default DesignRoom;
