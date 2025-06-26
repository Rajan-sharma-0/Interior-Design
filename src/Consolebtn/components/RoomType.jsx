import React from "react";

const RoomType = ({ roomType, setRoomType }) => {
  return (
    <div className="bg-white p-2 sm:p-1 md:p-4 rounded-md border border-gray-300 mb-4">
      <p className="font-bold md:text-sm">
        <span className="text-xl">1. Room Type</span>
        <span className="text-red-500 ml-2 text-xl">(Required)</span>
      </p>
      <select
  value={roomType}
  onChange={(e) => setRoomType(e.target.value)} // Line 14
  className="w-full p-2 mt-2 text-xl rounded-md border border-black sm:text-sm md:text-xs lg:text-xs"
>
        <option value="" disabled>
          Choose your room type
        </option>
        <option value="living-room">Living Room</option>
        <option value="bedroom">Bedroom</option>
        <option value="kitchen">Kitchen</option>
        <option value="bathroom">Bathroom</option>
        <option value="hall">Hall</option>
        <option value="dining-room">Dining Room</option>
        <option value="study-room">Study Room</option>
        <option value="common-room">Common Room</option>
      </select>
    </div>
  );
};

export default RoomType;