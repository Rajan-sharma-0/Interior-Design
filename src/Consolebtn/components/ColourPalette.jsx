import { useState } from "react";


const ColourPalette = () => {
    const [text, setText] = useState("");
      const characterLimit = 100;
  
      const handleChange = (event) => {
        setText(event.target.value);
      };

  return (
    <div className="bg-white p-2 sm:p-1 md:p-4 rounded-md border border-gray-300 mb-4">
        <p className="font-bold md:text-sm">
          <span className="text-xl">2. Enter Prompt</span>
          <span className="text-red-500 ml-2 text-xl">(Required)</span>
        </p>
        <textarea
          className="w-full p-2 mt-2 text-xl rounded-md border border-black sm:text-sm md:text-xs lg:text-xs"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here..."
          maxLength={characterLimit}
        />
        <div className="mt-2 text-sm">
          {text.length}/{characterLimit} characters
        </div>
      </div>
  );
};

export default ColourPalette;
