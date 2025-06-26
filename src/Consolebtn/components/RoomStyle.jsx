import React from "react";

const RoomStyle = ({ designArea, setDesignArea }) => {
  return (
    <div className="bg-white p-2 sm:p-1 md:p-4 rounded-md border border-gray-300 mb-4">
      <p className="font-bold md:text-sm">
        <span className="text-xl"> Color</span>
        <span className="text-red-500 ml-2 text-xl">(Required)</span>
      </p>
      <select
        value={designArea}
        onChange={(e) => setDesignArea(e.target.value)}
        className="w-full p-2 mt-2 rounded-md border border-black text-xl sm:text-sm md:text-xs lg:text-xs"
      >
        <option value="" disabled>
          Choose your room style
        </option>
        <option value="">Red</option>
        <option value="">Blue</option>
        <option value="">Pink</option>
        <option value="">Orange</option>
        <option value="">Green</option>
      </select>
    </div>
  );
};

export default RoomStyle;
